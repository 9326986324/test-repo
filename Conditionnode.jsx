import BaseNode from "./BaseNode";
export default () => (
  <BaseNode title="Condition" inputs={["value"]} outputs={["true","false"]}>
    <p>If/Else</p>
  </BaseNode>
);