import React from "react";

export function Join({state, setState}) {
  return (
    <>
      <h1>HOW TO PLAY!!!!</h1>
      <p>
        i come rough tough like an elephant tusk dare to compare get pierced
        just like an ear the zoowedowopbop strictly hardware life as a shorty
        shouldnt be so rough as the world turns i spread like germs bless the
        globe with the pestilence the hardheaded never learn feeling mad hostile
      </p>
      <button onClick={() => setState({ ...state, GameState: "Playing host" })}>Join as host</button>
      <button onClick={() => setState({ ...state, GameState: "Playing player" })}>Join as player</button>
    </>
  );
}
