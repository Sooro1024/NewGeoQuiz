import React from "react";
import {
  Button,
  Grow,
  LinearProgress,
  Typography,
  Slide
} from "@material-ui/core";
import Timer from "./Timer";
import ResultOfGame from "./ResultOfGame";
import MapComp from "./MapComp";
import { AnswerBox } from "./AnswerBox";

const GuessMap = ({
  gameArray,
  dataForGame,
  progress,
  CheckTheAnswer,
  result,
  onTime,
  gameMod,
  wrong
}) => {
  const percent = Math.round(progress * 7.143);
  if (gameArray.length === 0) {
    return <div />;
  } else if (gameArray[progress] !== undefined) {
    return (
      <>
        <Grow in={gameArray[progress] !== undefined} mountOnEnter unmountOnExit>
          <>
            {gameArray[progress] !== undefined && (
              <LinearProgress
                variant="determinate"
                color="secondary"
                value={percent}
                style={{ marginBottom: "5px" }}
              />
            )}
            <div style={{ display: "flex" }}>
              <MapComp gameArray={gameArray} progress={progress} />
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
                    progress={progress}
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
                  {AnswerBox(dataForGame, gameArray, progress)
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
        in={progress === 15}
        timeout={{ enter: 800, exit: 200 }}
        unmountOnExit
        mountOnEnter
      >
        <ResultOfGame result={result} gameMod={gameMod} wrong={wrong} />
      </Slide>
    );
  }
};

export default GuessMap