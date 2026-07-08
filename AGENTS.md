# AGENTS.md

# Mission

Build a bilingual n8n workflow kit that demonstrates enterprise automation, governance, and integration design without exposing private systems.

## Product rules

- Workflows must be importable JSON files for modern n8n.
- Do not embed credentials, real tenant IDs, internal URLs, customer names, or private payloads.
- Use mock endpoints, fake payloads, and placeholder credentials only.
- Include English and Spanish descriptions so clients understand the purpose quickly.
- Prefer robust workflow patterns: normalization, branching, fallback, human review, and explicit responses.
- Keep this repo distinct from the previous demos; this is a workflow library, not an app UI.

## Repository standards

- Include `README.md`, `docs/`, `LICENSE`, `.env.example`, `.gitignore`, and screenshots.
- Validate workflows locally before committing.
- Document import steps, implementation choices, decisions, and future improvements.
