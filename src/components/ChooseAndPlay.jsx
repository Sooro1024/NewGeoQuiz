import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import {
  RadioGroup,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Divider,
  Switch,
} from "@material-ui/core";
import CountryData from "../Data/CountryData";

const ChooseAndPlay = ({
  openDialog,
  gameMod,
  onTime,
  gameDiff,
  ChooseGameMod,
  ChooseGameDiff,
  HandleChanges,
  ChooseGameType,
  AppBarvalue
}) => {
  return (
    <Dialog open={openDialog} onBackdropClick={HandleChanges('openDialog')}>
      <DialogTitle>Setup game type & press start!!!</DialogTitle>
      <Divider variant="middle" />
      <FormGroup row style={{ marginLeft: "20px", marginTop: "15px" }}>
        <FormControl style={{ marginLeft: "20px" }} disabled={AppBarvalue !== 0}>
          <FormLabel label="GameModSel">
            Please choose
            <br />
            game mod.
          </FormLabel>
          <RadioGroup onChange={ChooseGameMod} value={AppBarvalue !== 0 ? `${AppBarvalue - 1}` : gameMod}>
            <FormControlLabel
              control={<Radio />}
              label="Guess Country"
              value="0"
            />
            <FormControlLabel
              control={<Radio />}
              label="Guess Flag"
              value="1"
            />
            <FormControlLabel
              control={<Radio />}
              label="Guess Capital"
              value="2"
            />
          </RadioGroup>
        </FormControl>
        <FormControl style={{ marginLeft: "20px", marginRight: "20px" }}>
          <FormLabel label="GameModSel">
            Please choose
            <br />
            game difficulty.
          </FormLabel>
          <RadioGroup onChange={ChooseGameDiff} value={gameDiff}>
            <FormControlLabel control={<Radio />} label="Easy" value="0" />
            <FormControlLabel control={<Radio />} label="Medium" value="1" />
            <FormControlLabel control={<Radio />} label="Hard" value="2" />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      <Divider variant="middle" />
      <FormGroup style={{ marginLeft: "30%" }}>
        <FormControl>
          <FormControlLabel
            control={
              <Switch value={onTime} onChange={HandleChanges('onTime')} />
            }
            label="Play on time"
          />
        </FormControl>
      </FormGroup>
      <CountryData  HandleChanges={HandleChanges('start')} gameDiff={gameDiff} ChooseGameType={ChooseGameType}/>
    </Dialog>
  );
};

export default ChooseAndPlay;
