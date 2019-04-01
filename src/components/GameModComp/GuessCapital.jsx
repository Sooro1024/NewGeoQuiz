import { Button, Card, CardContent, CardHeader, Grow, LinearProgress, Slide, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AnswerBox, IncrementResult } from "./functionModuls";
import GuessCapitalPhoto from "./GuessCapitalPhoto";
import GuessFlagStyles from "./GuessFlagStyles";
import ResultOfGame from "./ResultOfGame";
import Timer from "./Timer";

const styles = GuessFlagStyles;

const GuessCapital = ({
	gameArray,
	dataForGame,
	onTime,
	gameMod,
	gameDiff
}) => {
	const [state, setState] = useState([]);
	useEffect(() => {
		setState([]);
	}, [gameArray]);

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
					<div>
						<div style={styles.cardAndProgressWrapper}>
							<Card style={{ minWidth: "550px" }}>
								<CardHeader
									title={`Which country capital is ${
										gameArray[state.length].capital
									} ?`}
									subheader={`Question ${state.length + 1}`}
								/>
								<CardContent style={{ paddingTop: "0" }}>
									<GuessCapitalPhoto
										gameData={gameArray[state.length]}
										styles={styles.CardMedia}
										progress={state.length}
									/>
								</CardContent>
							</Card>
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
									style={{ userSelect: "none" }}
								>
									{result}
								</Typography>
							)}
						</div>
						<LinearProgress variant="determinate" value={percent} />
						<div style={styles.AnswerBoxWrapper}>
							<div style={styles.AnswerBox}>
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

export default GuessCapital;
