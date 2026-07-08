# Architecture

Nexus n8n Workflow Kit is a repository of importable n8n workflow JSON files.

## Workflows

- `vendor-risk-intake.json`: receives vendor risk payloads, classifies tier, and routes critical vendors to security review.
- `incident-triage-router.json`: receives incident payloads, scores route ownership, and posts a route decision.
- `ai-review-human-gate.json`: simulates AI policy review and sends risky requests through a human gate.
- `graph-user-lifecycle-sync.json`: runs on a schedule, normalizes mock user lifecycle items, and calls a placeholder Microsoft Graph endpoint.

## Validation

`scripts/validate-workflows.mjs` checks:

- workflow name
- node IDs and names
- core n8n node type prefixes
- numeric type versions
- connection references
- absence of embedded credentials
- metadata marking credentials as incomplete

## Safety

All URLs are placeholders or environment-driven mock endpoints. No credentials, tenant IDs, customer names, or internal URLs are included.
