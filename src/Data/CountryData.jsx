import React from "react";
import { Arr30MPC, Arr70MPC, Arr90MPC } from "./ArrOfMPCN";
import Data from "./Data";
import Button from "@material-ui/core/Button"

function func(a, b) {
  return 0.5 - Math.random();
}

const CountryData = ({ gameDiff, ChooseGameType, HandleChanges }) => {
  if (gameDiff === '0') {
    gameDiff = Arr30MPC;
  } else if (gameDiff === '2') {
    gameDiff = Arr90MPC;
  } else {
    gameDiff = Arr70MPC;
  }
  const DataForGame2 = Data.filter(el =>
    gameDiff.some(elem => elem === el.name)
  );
  const DataForGame = DataForGame2
  let GameArray = DataForGame2.sort(func).slice(0, 15);
  const ForOnClick = () => {
    ChooseGameType(GameArray, DataForGame)
    HandleChanges('start')
  }
  return <Button variant="contained" color="primary" onClick={ForOnClick}>Start</Button>
  }

export default CountryData;
