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

  return (
    <>
      <button onClick={() => {setRevealed(true); setChosen(true)}} className={hintClass()} disabled={chosen}>
        {revealed ? data.clue : data.description}
      </button>
      <br />
    </>
    
  );
}
