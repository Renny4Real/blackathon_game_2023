import React from "react";

export function Welcome({state, setState}) {
  return (
    <div id="welcome">
      <img src={`/app-background.png`} width="100%" onClick={() => setState({ ...state, GameState: "Joining" })}/>
      <img src={`/welcome-screen.png`} width="100%" onClick={() => setState({ ...state, GameState: "Joining" })}/>
      <img src={`/app-background.png`} width="100%" onClick={() => setState({ ...state, GameState: "Joining" })}/>
    </div>
  );
}
