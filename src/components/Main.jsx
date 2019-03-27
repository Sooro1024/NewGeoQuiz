import React, { Component } from "react";
import ChooseAndPlay from "./ChooseAndPlay";
//import MyAppBar from "./MyAppBar";
import GuessFlag from "./GameModComp/GuessFlag";
import ModIsUndefined from "./GameModComp/ModIsUndefined";
//import Slide from "@material-ui/core/Slide";
import GuessCapital from "./GameModComp/GuessCapital";
import AboutUs from "./AboutUs";
import GuessMap from "./GameModComp/GuessMap";
import { BrowserRouter as Router, Route, Link as RouterLink } from "react-router-dom"
import { SvgIcon, AppBar, Tabs, Tab } from "@material-ui/core";
//import Link from '@material-ui/core/Link'

const icon = (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          fill="white"
          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
        />
      </svg>
    </SvgIcon>
  );

export default class Main extends Component {
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
        <Router>
      <>
        <AppBar position="relative" color="primary">
        <Tabs value={value} onChange={this.HandleAppBarValeuChange}>
          <Tab
            classes={{ wrapper: "iconWrap", root: "icon", label: "iconText" }}
            icon={icon}
            label="Geo-Quiz"
            style={{ marginRight: "39%" }}
            component={RouterLink} to="/"
          />
          <Tab label="Guess Country" component={RouterLink} to="/GuessCountry" />
          <Tab label="Guess Flag" component={RouterLink} to="/GuessFlag" />
          <Tab label="Guess Capital" component={RouterLink} to="/GuessCapital"/>
          <Tab label="About us" component={RouterLink} to="/AboutUs"/>
        </Tabs>
      </AppBar>
        <div
          style={{
            minHeight: "665px",
            paddingTop: "30px",
            backgroundColor: "#FAFAFA"
          }}
        >
        <Route path="/" exact render={(props)=>(<ModIsUndefined {...props} HandleChanges={this.HandleChanges} HandleAppBarValeuChange={this.HandleAppBarValeuChange}/>)} />
        <Route path="/GuessCountry" exact render={(props)=>(<GuessMap onTime={onTime}
            gameArray={gameArray}
            dataForGame={dataForGame}
            progress={progress}
            CheckTheAnswer={this.CheckTheAnswer}
            result={result}
            gameMod={gameMod} />)} />
        <Route path="/GuessFlag" exact render={(props)=>(<GuessFlag
              onTime={onTime}
              gameArray={gameArray}
              dataForGame={dataForGame}
              progress={progress}
              CheckTheAnswer={this.CheckTheAnswer}
              result={result}
              gameMod={gameMod}
            />)} />
        <Route path="/GuessCapital" exact render={(props)=>(<GuessCapital
            onTime={onTime}
            gameArray={gameArray}
            dataForGame={dataForGame}
            progress={progress}
            CheckTheAnswer={this.CheckTheAnswer}
            result={result}
            gameMod={gameMod}
            />)} />
        <Route path="/AboutUs" exact render={(props)=>(<AboutUs />)} />
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
      </Router>
    );
  }
}