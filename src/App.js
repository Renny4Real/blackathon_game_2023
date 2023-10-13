import "./App.css";
import { Join } from "./Join";
import { useState } from "react";
import { Host } from "./Host";
import { Player } from "./Player";
import rounds from "./rounds.json";

function ConditionalRender(state, setState){
  switch (state.GameState) {
    case "Joining":
      return <Join state={state} setState={setState} />
    case "Playing host":
      return <Host state={state} setState={setState}/>
    case "Playing player":
      return <Player state={state} setState={setState}/>
  }
}

function App() {
  const [state, setState] = useState({ GameState: "Joining", rounds, currentRoundId: 0 });

  return (
    <div className="App">
      {ConditionalRender(state, setState)}
    </div>
  );
}

export default App;
