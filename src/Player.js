import {React, useState} from "react";
import { Answer } from "./Answer";

export function Player({ state, setState }) {
  const currentRound = state.rounds[state.currentRoundId];
  const [clicked, setClicked] = useState(false)

  return (
    <div id="host">
      <h1>YOU ARE THE PLAYER!!!</h1>
      <img src={`/person-${state.currentRoundId}.jpg`} width="100%" />
      <h2>{currentRound.question}</h2>
      <div id="answers">
        {currentRound.answers.map((data) => (
         <Answer data={data} onClick={() => setClicked(true)} enabled={!clicked}/>
        ))}
      </div>
    </div>
  )
}
