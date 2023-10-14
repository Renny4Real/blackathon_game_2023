import React, { useState } from "react";

export function Answer({ data, onClick, enabled }) {
  const [chosen, setChosen] = useState(false);

  const buttonClass = () => {
    if (chosen) {
      return data.correct ? "correct" : "incorrect";
    }
    return "notSelected";
  };

  const clickHandler = () => {
    if (enabled) {
      setChosen(true);
      onClick();
    }
  };

  return (
    <>
      <button onClick={clickHandler} className={buttonClass()} disabled={chosen}>
        {data.answer}
      </button>
      <br />
    </>
  );
}
