# Project

Nexus n8n Workflow Kit / Kit de flujos n8n Nexus

## Overview

English: Nexus n8n Workflow Kit is a bilingual collection of importable n8n workflows for enterprise-style automation, incident routing, vendor risk intake, AI governance, and Microsoft Graph lifecycle sync patterns.

Español: Nexus n8n Workflow Kit es una coleccion bilingue de workflows importables para automatizacion enterprise, enrutamiento de incidentes, riesgo de proveedores, gobierno de AI y sincronizacion tipo Microsoft Graph.

Compatibility note: validated against n8n workflow JSON conventions for the current npm release checked during development, `n8n@2.29.7`.

Import verification: all workflows were imported successfully with the real `n8nio/n8n:2.29.7` Docker image using `n8n import:workflow`.

## Features

- English: Four importable n8n workflow JSON files / Español: Cuatro archivos JSON importables en n8n
- English: Credential-safe placeholders / Español: Placeholders seguros sin credenciales
- English: Webhook, Code, IF, HTTP Request, Respond to Webhook, and Schedule Trigger nodes / Español: Nodos Webhook, Code, IF, HTTP Request, Respond to Webhook y Schedule Trigger
- English: Local workflow validation script / Español: Script local para validar workflows
- English: Mock request payloads / Español: Payloads demo
- English: Bilingual documentation / Español: Documentacion bilingue

## Architecture

English: Workflows live in `workflows/`, sample payloads live in `samples/`, and `scripts/validate-workflows.mjs` checks structure, connections, node IDs, and credential safety.

Español: Los workflows viven en `workflows/`, los payloads demo en `samples/` y `scripts/validate-workflows.mjs` valida estructura, conexiones, IDs y seguridad de credenciales.

## Tech Stack

- n8n workflow JSON
- n8n 2.x import format
- Node.js validation scripts
- Prettier
- Husky
- Mock enterprise payloads

## Installation

```bash
npm install
```

## Running locally

```bash
npm run validate
```

English: Import any workflow JSON from `workflows/` into n8n using the Editor UI import menu or n8n CLI import commands.

Español: Importa cualquier JSON de `workflows/` en n8n usando el menu de importacion del Editor UI o comandos CLI de n8n.

Optional n8n sandbox:

```bash
docker compose up -d
```

English: This starts `n8nio/n8n:2.29.7` at `http://localhost:5678`.

Español: Esto inicia `n8nio/n8n:2.29.7` en `http://localhost:5678`.

## Folder structure

```text
workflows/
samples/
docs/
scripts/
public/
docker-compose.yml
README.md
AGENTS.md
package.json
```

## Screenshots

- [Workflow kit preview](public/screenshots/nexus-n8n-workflow-kit.svg)

## Why this project exists

English: This project demonstrates practical n8n workflow architecture for clients who need automation, governance, and enterprise integration patterns without exposing private workflows.

Español: Este proyecto demuestra arquitectura practica de flujos n8n para clientes que necesitan automatizacion, gobierno e integraciones enterprise sin exponer flujos privados.

## License

MIT
