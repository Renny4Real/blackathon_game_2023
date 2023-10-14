import {React, useState} from "react";
import { Clue } from "./Clue";

export function Host({ state, setState }) {
  const currentRound = state.rounds[state.currentRoundId];


  return (
    <div id="host">
      <h1>YOU ARE THE HOST!!!</h1>
      <h2>{`Help everyone guess what ${currentRound.name} is famous for`}</h2>
      <img src={`/person-${state.currentRoundId}.jpg`} width="100%" />
      <div id="clue">
        {currentRound.clues.map((data) => (
          <Clue data={data} />
        ))}
      </div>
      <br />
      <br />
      <button onClick={() => setState({ ...state, GameState: "End Round" })}>End Round</button>
    </div>
  );
}
