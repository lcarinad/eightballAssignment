import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const getRandomIdx = (answers) => {
    let idx = Math.floor(Math.random() * answers.length + 1);
    return idx;
  };

  function handleClick() {
    let idx = getRandomIdx(answers);
    const { msg, color } = answers[idx];

    setMsg(msg);
    setColor(color);
  }

  return (
    <div>
      <button
        className="EightBall-button"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        {msg}
      </button>
    </div>
  );
};

export default EightBall;
