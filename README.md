# Promptster Documentation

Public documentation for [Promptster](https://promptster.ai) — objective AI coding assessments that capture how candidates work, not just what they build.

This repo powers the docs site at [docs.promptster.ai](https://docs.promptster.ai), built with [Mintlify](https://mintlify.com).

## Structure

```
candidates/     Candidate-facing docs (CLI install, commands, decisions, privacy, FAQ)
reviewers/      Hiring team docs (guides, session review, API reference, resources)
index.mdx       Landing page
docs.json       Mintlify configuration
```

## Local development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint):

```bash
npm i -g mint
```

Preview locally:

```bash
mint dev
```

View at `http://localhost:3000`.

## Check for broken links

```bash
mint broken-links
```

## Publishing

Changes pushed to the default branch are deployed automatically via the [Mintlify GitHub app](https://dashboard.mintlify.com/settings/organization/github-app).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for writing guidelines and local setup instructions.
