import Slide from "@material-ui/core/Slide";
import React, { Component } from "react";
import AboutUs from "./AboutUs";
import ChooseAndPlay from "./ChooseAndPlay";
import GuessCapital from "./GameModComp/GuessCapital";
import GuessFlag from "./GameModComp/GuessFlag";
import GuessMap from "./GameModComp/GuessMap";
import ModIsUndefined from "./GameModComp/ModIsUndefined";
import MyAppBar from "./MyAppBar";

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
			dataForGame: []
		};
	}

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
			dataForGame
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
						<ModIsUndefined
							HandleChanges={this.HandleChanges}
							HandleAppBarValeuChange={this.HandleAppBarValeuChange}
						/>
					</Slide>
					<Slide direction="up" in={value === 1} mountOnEnter unmountOnExit>
						<GuessMap
							onTime={onTime}
							gameArray={gameArray}
							dataForGame={dataForGame}
							gameDiff={gameDiff}
							gameMod={gameMod}
						/>
					</Slide>
					<Slide direction="up" in={value === 2} mountOnEnter unmountOnExit>
						<GuessFlag
							onTime={onTime}
							gameArray={gameArray}
							dataForGame={dataForGame}
							gameDiff={gameDiff}
							gameMod={gameMod}
						/>
					</Slide>
					<Slide direction="up" in={value === 3} mountOnEnter unmountOnExit>
						<GuessCapital
							onTime={onTime}
							gameArray={gameArray}
							dataForGame={dataForGame}
							gameDiff={gameDiff}
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
