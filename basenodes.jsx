import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  className = "",
}) => {
  return (
    <div className={`node-container ${className}`}>
      <div className="node-header">{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 50 + index * 20 }}
        />
      ))}

      {/* Node Body */}
      <div className="node-body">{children}</div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 50 + index * 20 }}
        />
      ))}
    </div>
  );
};

export default BaseNode;