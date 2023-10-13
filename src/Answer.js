import React, { useState } from "react";

export function Answer({ data, onClick, enabled }) {
  const [chosen, setChosen] = useState(false);

  const buttonClass = () => {
    if (chosen) {
      return data.correct ? "correct" : "incorrect";
    }
    return "";
  };

  const clickHandler = () => {
    if (enabled) {
      setChosen(true);
      onClick();
    }
  };

  return (
    <li onClick={clickHandler} className={buttonClass()}>
      {data.answer}
    </li>
  );
}
