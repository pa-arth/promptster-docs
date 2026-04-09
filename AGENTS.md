# Promptster Documentation — AI Instructions

## About this project

- Documentation site for [Promptster](https://promptster.ai), built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Run `mint dev` to preview locally
- Run `mint broken-links` to check links

## Terminology

- Use "assessment" not "test" or "exam"
- Use "candidate" not "user" when referring to someone taking an assessment
- Use "hiring team" or "reviewer" not "recruiter" for the people reviewing sessions
- Use "session" not "recording" or "capture" for the telemetry record
- Use "decision" not "ADR" or "architecture decision record"
- Use "signal" not "score" or "metric" for derived evaluation data
- Use "CLI" not "client" when referring to the `promptster` command-line tool

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Lead with the goal, not the steps ("To create an assessment, ..." not "First you need to...")
- Include curl examples for API endpoints

## Content boundaries

- Do not document internal worker pipeline details or database schema
- Do not document the `usage/summary` or `api-keys` endpoints (dashboard-only, excluded from public docs)
- Do not reference internal repos (`promptster-backend`, `Promptster`) by name
- Candidate docs should never reference pricing, billing, or org management
