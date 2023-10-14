import React from "react";

export function Join({state, setState}) {
  return (
    <div id="join">
      <h1>HOW TO PLAY!!!!</h1>
      <p>
        The aim of the game is to guess what the historical black figure is most famous for, with as few clues as possible.
      </p>
      <p>
        But be careful! If you guess incorrectly you will lose points.
      </p>
      <p>
        Players will take turns to “host” a round. When you are the host, reveal the clues one at a time and discuss them with the players. 
      </p>
      <p>
        The sooner someone guesses correctly, the more points you earn. The challenge is to see if you can select the most useful clues first.
      </p>
      <button onClick={() => setState({ ...state, GameState: "Playing host" })}>Join as host</button>
      <button onClick={() => setState({ ...state, GameState: "Playing player" })}>Join as player</button>
    </div>
  );
}
