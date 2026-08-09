# Security Policy

## Scope

Presence Cards is a static, client-side app: no accounts, no server-side
data storage, and no analytics. The only browser storage it uses is a
single `localStorage` flag (`presence-cards:intro-seen`) to avoid
re-showing the intro screen. There is no user data to breach, but
supply-chain and XSS-class issues in the app or its dependencies are still
worth reporting.

## Reporting a vulnerability

Please **do not** open a public GitHub issue for a security report.

Instead, report it privately:

- Preferred: use GitHub's [private vulnerability reporting](https://github.com/brylie/presence-cards/security/advisories/new)
  for this repository (Security tab → "Report a vulnerability").
- Alternative: **[MAINTAINER_CONTACT — replace with a monitored email
  before publishing this repository]**.

Please include:

- A description of the issue and its potential impact.
- Steps to reproduce, or a proof-of-concept if you have one.
- The affected version/commit.

## Response

This is a small, community-maintained project without a formal SLA. We'll
acknowledge reports as soon as we can and aim to have a fix or mitigation
plan within a couple of weeks for anything credible. Please give us a
reasonable window to fix an issue before any public disclosure.

## Dependencies

This project depends on React, Vite, and TypeScript tooling. Dependency
vulnerabilities should generally be reported upstream, but flagging them
here (privately, as above) is also fine if you're not sure where they
belong.
