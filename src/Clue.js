import React, { useState } from "react";

export function Clue({ data }) {
  const [revealed, setRevealed] = useState(false);
  const [chosen, setChosen] = useState(false)

  const hintClass = () => {
    if (chosen) {
      return "selected";
    } else {
      return "notSelected";
    }
  };

  // const clickHandler = () => {
  //   if (enabled) {
  //     setChosen(true);
  //     onClick();
  //   }
  // };

  return (
    <li onClick={() => {setRevealed(true); setChosen(true)}} className={hintClass()}>
      {revealed ? data.clue : data.description}
    </li>
  );
}
