export async function submitPipeline(nodes, edges) {
  const res = await fetch("http://localhost:8000/pipelines/parse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nodes, edges }),
  });

  const data = await res.json();

  alert(
    `Pipeline Info
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
  );
}