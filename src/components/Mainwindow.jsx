import React, { Component } from "react";
import ChooseAndPlay from "./ChooseAndPlay";
import MyAppBar from "./MyAppBar";
import GuessFlag from "./GameModComp/GuessFlag";
import ModIsUndefined from "./GameModComp/ModIsUndefined";
import Slide from "@material-ui/core/Slide";
import GuessCapital from "./GameModComp/GuessCapital";
import AboutUs from "./AboutUs";
import GuessCountry from "./GameModComp/GuessCountry";
import GuessMap from "./GameModComp/GuessMap";

export default class Mainwindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      openDialog: false,
      gameMod: "0",
      gameDiff: "0",
      onTime: false,
      start: false,
      gameArray: [],
      dataForGame: [],
      progress: 0,
      result: 0
    };
  }

  IncrementResult = () => {
    if (this.state.onTime) {
      if (this.state.gameDiff === '0') {
        this.setState({ result: this.state.result + 150 })
      } else if (this.state.gameDiff === '1') {
        this.setState({ result: this.state.result + 300 })
      } else {
        this.setState({ result: this.state.result + 450 })
      }
    } else { 
      if (this.state.gameDiff === '0') {
        this.setState({ result: this.state.result + 100 })
      } else if (this.state.gameDiff === '1') {
        this.setState({ result: this.state.result + 200 })
      } else {
        this.setState({ result: this.state.result + 300 })
      }
    }
  }

  CheckTheAnswer = event => {
    this.setState({ progress: this.state.progress + 1 });
    if (this.state.gameArray[this.state.progress].name === event) {
      this.IncrementResult();
    }
  };

  ChooseGameMod = event => {
    this.setState({ gameMod: event.target.value });
  };

  ChooseGameDiff = event => {
    this.setState({ gameDiff: event.target.value });
  };

  HandleChanges = name => ev => {
    this.setState({ [name]: !this.state[name] });
    if (name === "start") {
      this.setState({
        openDialog: !this.state.openDialog,
        value: this.state.gameMod - 0 + 1
      });
    }
  };

  HandleAppBarValeuChange = (event, value) => {
    this.setState({
      value,
      gameArray: [],
      dataForGame: [],
      progress: 0,
      result: 0,
      onTime: false
    });
    if (4 > value && value > 0) {
      this.setState({
        openDialog: !this.state.openDialog,
        gameMod: `${value - 1}`
      });
    }
  };

  ChooseGameType = (gameArray, dataForGame) => {
    this.setState({ gameArray, dataForGame });
  };

  render() {
    const {
      value,
      openDialog,
      gameMod,
      gameDiff,
      onTime,
      gameArray,
      dataForGame,
      progress,
      result
    } = this.state;
    return (
      <>
        <MyAppBar
          value={value}
          HandleAppBarValeuChange={this.HandleAppBarValeuChange}
        />
        <div
          style={{
            minHeight: "665px",
            paddingTop: "30px",
            backgroundColor: "#FAFAFA"
          }}
        >
          <Slide direction="up" in={value === 0} mountOnEnter unmountOnExit>
            <ModIsUndefined HandleChanges={this.HandleChanges} />
          </Slide>
          <Slide direction="up" in={value === 1} mountOnEnter unmountOnExit>
            {/* <GuessCountry /> */}
            <GuessMap onTime={onTime}
            gameArray={gameArray}
            dataForGame={dataForGame}
            progress={progress}
            CheckTheAnswer={this.CheckTheAnswer}
            result={result}
            gameMod={gameMod} />
          </Slide>
          <Slide direction="up" in={value === 2} mountOnEnter unmountOnExit>
            <GuessFlag
              onTime={onTime}
              gameArray={gameArray}
              dataForGame={dataForGame}
              progress={progress}
              CheckTheAnswer={this.CheckTheAnswer}
              result={result}
              gameMod={gameMod}
            />
          </Slide>
          <Slide direction="up" in={value === 3} mountOnEnter unmountOnExit>
            <GuessCapital
            onTime={onTime}
            gameArray={gameArray}
            dataForGame={dataForGame}
            progress={progress}
            CheckTheAnswer={this.CheckTheAnswer}
            result={result}
            gameMod={gameMod}
            />
          </Slide>
          <Slide direction="up" in={value === 4} mountOnEnter unmountOnExit>
            <AboutUs />
          </Slide>
        </div>
        <ChooseAndPlay
          openDialog={openDialog}
          gameMod={gameMod}
          onTime={onTime}
          gameDiff={gameDiff}
          ChooseGameMod={this.ChooseGameMod}
          ChooseGameDiff={this.ChooseGameDiff}
          HandleChanges={this.HandleChanges}
          ChooseGameType={this.ChooseGameType}
          AppBarvalue={value}
        />
      </>
    );
  }
}