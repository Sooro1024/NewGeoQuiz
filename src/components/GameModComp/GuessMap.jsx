import { Button, Grow, LinearProgress, Slide, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AnswerBox, IncrementResult } from "./functionModuls";
import MapComp from "./MapComp";
import ResultOfGame from "./ResultOfGame";
import Timer from "./Timer";

const GuessMap = ({ gameArray, dataForGame, onTime, gameMod, gameDiff }) => {
	const [state, setState] = useState([]);
	useEffect(() => {
		setState([]);
	}, [gameArray]); // this will work like componentDidUpdate. I need this because without this
									 // I will have a issue. When gameArray is change the function is save previus progress.
	function CheckTheAnswer(ev) {
		if (ev === gameArray[state.length].name) {
			setState([...state, true]);
		} else {
			setState([...state, false]);
		}
	}

	const result = IncrementResult(onTime, state, gameDiff);
	const wrong = () =>
		state
			.map((el, index) => (!el ? gameArray[index].name : null))
			.filter(value => value !== null);

	const percent = Math.round(state.length * 7.143);
	if (gameArray.length === 0) {
		return <div />;
	} else if (gameArray[state.length] !== undefined) {
		return (
			<>
				<Grow
					in={gameArray[state.length] !== undefined}
					mountOnEnter
					unmountOnExit
				>
					<>
						{gameArray[state.length] !== undefined && (
							<LinearProgress
								variant="determinate"
								color="secondary"
								value={percent}
								style={{ marginBottom: "5px" }}
							/>
						)}
						<div style={{ display: "flex" }}>
							<MapComp gameArray={gameArray} progress={state.length} />
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									maxWidth: "350px",
									minWidth: "350px",
									alignItems: "center",
									justifyContent: "center",
									margin: "30px"
								}}
							>
								{onTime && (
									<Timer
										result={result}
										progress={state.length}
										CheckTheAnswer={CheckTheAnswer}
									/>
								)}
								{!onTime && (
									<Typography
										variant="h3"
										color="primary"
										style={{ userSelect: "none", marginBottom: "80px" }}
									>
										{result}
									</Typography>
								)}
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										marginTop: "30px",
										minWidth: "250px"
									}}
								>
									{AnswerBox(dataForGame, gameArray, state.length)
										.sort((a, b) => {
											return 0.5 - Math.random();
										})
										.map(el => (
											<Button
												style={{ marginBottom: "10px" }}
												onClick={() => CheckTheAnswer(`${el.name}`)}
												variant="contained"
												color="primary"
												key={el.name}
											>
												{el.name}
											</Button>
										))}
								</div>
							</div>
						</div>
					</>
				</Grow>
			</>
		);
	} else {
		return (
			<Slide
				direction="down"
				in={state.length === 15}
				timeout={{ enter: 800, exit: 200 }}
				unmountOnExit
				mountOnEnter
			>
				<ResultOfGame result={result} gameMod={gameMod} wrong={wrong()} />
			</Slide>
		);
	}
};

export default GuessMap;
