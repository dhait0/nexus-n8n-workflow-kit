# Decisions

## Use workflow JSON instead of screenshots only

The goal is to provide artifacts that clients can import and inspect, not just images of a flow.

## Avoid real AI credentials

The AI review workflow simulates policy classification in a Code node. This keeps the repo safe while still showing governance and human-review design.

## Keep Microsoft Graph as a placeholder

The Graph workflow shows lifecycle-sync structure without real tenant IDs, scopes, tokens, or user data.

## Validate before commit

Workflow JSON is easy to break by hand. The validation script catches missing nodes, invalid connections, duplicate IDs, and credential leaks.
