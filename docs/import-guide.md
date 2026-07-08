# Import Guide

English: Use this guide to import the workflow JSON files into a local n8n 2.x instance.

Español: Usa esta guia para importar los archivos JSON en una instancia local de n8n 2.x.

## Local sandbox

Start n8n 2.29.7:

```bash
docker compose up -d
```

Open:

```text
http://localhost:5678
```

## Editor import

Use the n8n editor import option and select any file from `workflows/`.

Recommended first imports:

- `workflows/vendor-risk-intake.json`
- `workflows/incident-triage-router.json`
- `workflows/ai-review-human-gate.json`
- `workflows/graph-user-lifecycle-sync.json`

## CLI import

Inside the container, n8n supports workflow import commands. Example:

```bash
docker compose exec n8n n8n import:workflow --input=/workflows/vendor-risk-intake.json
```

This repository was verified with the `n8nio/n8n:2.29.7` Docker image and `n8n import:workflow`.

## Credentials

After importing, configure real HTTP credentials inside n8n only if you are testing against real systems. This repository intentionally ships without credentials.

## Stop sandbox

```bash
docker compose down
```
