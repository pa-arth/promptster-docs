import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');

test('reviewer navigation uses the real spec and exposes custom authoring', () => {
  const config = JSON.parse(read('docs.json'));
  const reviewer = config.navigation.tabs.find((tab) => tab.tab === 'Reviewers');
  assert.equal(reviewer.openapi, '/api-reference/openapi.json');
  assert.ok(JSON.stringify(reviewer).includes('reviewers/guides/author-custom-problems'));
  const spec = JSON.parse(read('api-reference/openapi.json'));
  assert.equal(spec.servers[0].url, 'https://api.promptster.ai');
  assert.equal(spec.components.securitySchemes.orgApiKey.scheme, 'bearer');
  for (const [path, methods] of Object.entries({
    '/v1/assessments': ['get', 'post'],
    '/v1/sessions': ['get'],
    '/v1/issues': ['get'],
    '/v1/issues/custom': ['post'],
    '/v1/issues/custom/{id}': ['get', 'put'],
    '/v1/org/keys': ['get'],
    '/v1/candidates': ['get'],
  })) for (const method of methods) assert.ok(spec.paths[path]?.[method], `${method} ${path}`);
  for (const method of ['post', 'put']) {
    const path = method === 'post' ? '/v1/issues/custom' : '/v1/issues/custom/{id}';
    assert.ok(JSON.stringify(spec.paths[path][method].responses['422']).includes('brief_restates_requirement'));
  }
  assert.doesNotMatch(JSON.stringify(spec), /Plant Store|\/plants|usage\/summary|api-keys/);
  const page = read('reviewers/guides/author-custom-problems.mdx');
  for (const phrase of ['problem_preparing', 'problem_in_use', 'brief_restates_requirement',
    'Held by nobody means no teammate can reveal this requirement.', 'an absent required row is marked missed']) assert.ok(page.includes(phrase), phrase);
});
