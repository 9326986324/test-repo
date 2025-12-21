import React, { useState, useEffect } from "react";
import BaseNode from "./BaseNode";

const REGEX = /\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g;

export default function TextNode() {
  const [text, setText] = useState("");
  const [vars, setVars] = useState([]);

  useEffect(() => {
    const matches = [...text.matchAll(REGEX)];
    setVars([...new Set(matches.map(m => m[1]))]);
  }, [text]);

  return (
    <BaseNode title="Text" inputs={vars} outputs={["text"]}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          width: Math.max(180, text.length * 6),
          height: Math.max(80, text.split("\n").length * 22),
        }}
      />
    </BaseNode>
  );
}