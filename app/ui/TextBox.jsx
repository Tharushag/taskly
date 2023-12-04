"use client";

import { useState, useEffect } from "react";

function TextBox({ text, disabled, style="" }) {
  useEffect(() => {
    setInput(text);
  }, [text]);

  const [input, setInput] = useState(text);
  const handleInput = ({ target }) => setInput(target.value);

  return (
    <input className={`classic-input ${style}`} value={input} onInput={handleInput} disabled={disabled} />
  );
}

export default TextBox;
