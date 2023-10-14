import { React, useState } from "react";

export function Scores({ state, setState }) {
  const nextRound = state.currentRoundId + 1;

  return (
    <>
    <div id="scores">
    <img src={`/app-background.png`} width="100%" />
      <h1>{`ROUND ${state.currentRoundId + 1}`}</h1>
        <table>
          <tr>
            <td>Renny</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Derek</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Kayleigh D</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Zen Ben</td>
            <td>-4</td>
          </tr>
        </table>
      <br />
      </div>
    <button onClick={() => setState({ ...state, GameState: "Joining", currentRoundId: nextRound })}>Next Round</button>
    <img src={`/app-background.png`} width="100%" />
    </>
    
  );
}
