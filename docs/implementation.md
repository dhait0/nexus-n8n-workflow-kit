# Implementation

The workflows use n8n JSON exports with stable core nodes.

## Compatibility approach

The current n8n docs state that workflows are saved, exported, and imported as JSON files. The workflows in this repository follow that model and avoid credential embedding.

During development, the current npm release was checked as `n8n@2.29.7`. The workflows use stable core nodes and avoid credential serialization so they remain suitable for n8n 2.x imports.

All workflows were also imported successfully with the real `n8nio/n8n:2.29.7` Docker image using the n8n CLI command `import:workflow`.

## Import

Use one of these paths:

- n8n Editor UI: import from file.
- n8n CLI: import workflow JSON into a local instance.
- Source control workflow: store JSON in Git and import into a target environment.

See `docs/import-guide.md` for Docker Compose sandbox instructions using `n8nio/n8n:2.29.7`.

## Credential setup

After import, configure credentials inside n8n for any real HTTP Request node. The repository intentionally ships with `templateCredsSetupCompleted: false`.
