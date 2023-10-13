import {React, useState} from "react";
import { Clue } from "./Clue";

export function Host({ state, setState }) {
  const currentRound = state.rounds[state.currentRoundId];


  return (
    <div id="host">
      <h1>YOU ARE THE HOST!!!</h1>
      <p>{`Help everyone guess what ${currentRound.name} is famous for`}</p>
      <img src={`/person-${state.currentRoundId}.jpg`} width="100%" />
      <ul id="clue">
        {currentRound.clues.map((data) => (
          <Clue data={data} />
        ))}
      </ul>
    </div>
  );
}
