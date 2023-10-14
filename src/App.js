import "./App.css";
import { Join } from "./Join";
import { useState } from "react";
import { Host } from "./Host";
import { Player } from "./Player";
import rounds from "./rounds.json";
import { Welcome } from "./Welcome";
import { Bio } from "./Bio";
import { Scores } from "./Scores";

function ConditionalRender(state, setState){
  switch (state.GameState) {
    case "Welcome":
      return  <Welcome state={state} setState={setState} />
    case "Joining":
      return <Join state={state} setState={setState} />
    case "Playing host":
      return <Host state={state} setState={setState}/>
    case "Playing player":
      return <Player state={state} setState={setState}/>
    case "End Round":
      return <Bio state={state} setState={setState}/>
    case "Show scores":
      return <Scores state={state} setState={setState}/>
  }
}

function App() {
  const [state, setState] = useState({ GameState: "Welcome", rounds, currentRoundId: 0 });
  console.log("current id " + state.currentRoundId )
  console.log("state: ", state )

  return (
    <div className="App">
      {ConditionalRender(state, setState)}
    </div>
  );
}

export default App;
