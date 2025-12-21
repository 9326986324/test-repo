import BaseNode from "./BaseNode";

export default function LLMNode() {
  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <p>LLM Processing</p>
    </BaseNode>
  );
}