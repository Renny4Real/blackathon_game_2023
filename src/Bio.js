import React, { useState } from "react";

export function Bio({state, setState}) {
  const currentRound = state.rounds[state.currentRoundId];

  return (
    <>
    <h1>{currentRound.name}</h1>
     <img src={`/person-${state.currentRoundId}.jpg`} width="100%" />
     <p>{currentRound.bio}</p>
     <button onClick={() => setState({ ...state, GameState: "Show scores" })}>See Scores</button>
    </>
   
  );
}
