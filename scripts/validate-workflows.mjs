import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const workflowDir = new URL("../workflows/", import.meta.url);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function validateWorkflow(workflow, fileName) {
  assert(
    typeof workflow.name === "string" && workflow.name.length > 0,
    `${fileName}: missing name`,
  );
  assert(Array.isArray(workflow.nodes), `${fileName}: nodes must be an array`);
  assert(workflow.nodes.length >= 3, `${fileName}: expected at least three nodes`);
  assert(
    workflow.connections && typeof workflow.connections === "object",
    `${fileName}: missing connections`,
  );
  assert(!workflow.credentials, `${fileName}: workflow-level credentials are not allowed`);

  const nodeNames = new Set();
  const nodeIds = new Set();

  for (const node of workflow.nodes) {
    assert(typeof node.id === "string" && node.id.length > 0, `${fileName}: node missing id`);
    assert(typeof node.name === "string" && node.name.length > 0, `${fileName}: node missing name`);
    assert(
      typeof node.type === "string" && node.type.startsWith("n8n-nodes-base."),
      `${fileName}: invalid node type ${node.type}`,
    );
    assert(
      typeof node.typeVersion === "number",
      `${fileName}: ${node.name} missing numeric typeVersion`,
    );
    assert(
      Array.isArray(node.position) && node.position.length === 2,
      `${fileName}: ${node.name} missing position`,
    );
    assert(!node.credentials, `${fileName}: ${node.name} must not embed credentials`);
    assert(!nodeNames.has(node.name), `${fileName}: duplicate node name ${node.name}`);
    assert(!nodeIds.has(node.id), `${fileName}: duplicate node id ${node.id}`);
    nodeNames.add(node.name);
    nodeIds.add(node.id);
  }

  for (const [sourceName, groups] of Object.entries(workflow.connections)) {
    assert(
      nodeNames.has(sourceName),
      `${fileName}: connection references missing source ${sourceName}`,
    );
    assert(
      groups && typeof groups === "object",
      `${fileName}: invalid connection group for ${sourceName}`,
    );

    for (const outputs of Object.values(groups)) {
      assert(Array.isArray(outputs), `${fileName}: outputs for ${sourceName} must be arrays`);
      for (const outputConnections of outputs) {
        assert(
          Array.isArray(outputConnections),
          `${fileName}: output branch for ${sourceName} must be an array`,
        );
        for (const connection of outputConnections) {
          assert(
            nodeNames.has(connection.node),
            `${fileName}: connection references missing target ${connection.node}`,
          );
          assert(typeof connection.type === "string", `${fileName}: connection missing type`);
          assert(Number.isInteger(connection.index), `${fileName}: connection missing index`);
        }
      }
    }
  }

  assert(
    workflow.settings && typeof workflow.settings === "object",
    `${fileName}: missing settings`,
  );
  assert(
    workflow.meta && workflow.meta.templateCredsSetupCompleted === false,
    `${fileName}: meta must mark credentials incomplete`,
  );
}

const files = (await readdir(workflowDir)).filter((file) => file.endsWith(".json")).sort();
assert(files.length >= 3, "expected at least three workflow JSON files");

for (const file of files) {
  const workflow = JSON.parse(await readFile(join(workflowDir.pathname, file), "utf8"));
  validateWorkflow(workflow, file);
  console.log(`validated ${file}`);
}
