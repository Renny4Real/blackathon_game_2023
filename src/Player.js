import {React, useState} from "react";
import { Answer } from "./Answer";

export function Player({ state, setState }) {
  console.log(state)
  const currentRound = state.rounds[state.currentRoundId];
  const [clicked, setClicked] = useState(false)

  return (
    <div id="host">
      <h1>YOU ARE THE PLAYER!!!</h1>
      <img src={`/person-${state.currentRoundId}.jpg`} width="100%" />
      <p>{currentRound.question}</p>
      <ul id="answers">
        {currentRound.answers.map((data) => (
         <Answer data={data} onClick={() => setClicked(true)} enabled={!clicked}/>
        ))}
      </ul>
    </div>
  )
}
