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

const AnswerBox = (dataForGame, gameArray, progress) => {
  let arrOfAnswer = [];
  arrOfAnswer.push(gameArray[progress]);
  for (let i = 1; arrOfAnswer.length < 4; i++) {
    let el = Math.floor(Math.random() * dataForGame.length);
    if (!arrOfAnswer.some(e => e.name === dataForGame[el].name)) {
      arrOfAnswer.push(dataForGame[el]);
    }
  }
  return arrOfAnswer;
};

const GuessMap = ({
  gameArray,
  dataForGame,
  progress,
  CheckTheAnswer,
  result,
  onTime,
  gameMod
}) => {
  const percent = Math.round(progress * 7.143);
  if (gameArray.length === 0) {
    return <div />;
  } else {
    return (
      <>
        <Slide
          direction="down"
          in={progress === 15}
          timeout={{ enter: 800, exit: 200 }}
          unmountOnExit
          mountOnEnter
        >
          <ResultOfGame result={result} gameMod={gameMod} />
        </Slide>
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
              {gameArray[progress] !== undefined && (
                <MapComp gameArray={gameArray} progress={progress} />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "350px",
                  minWidth: "350px",
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: "30px"
                }}
              >
                {onTime && gameArray[progress] !== undefined && (
                  <Timer
                    result={result}
                    progress={progress}
                    CheckTheAnswer={CheckTheAnswer}
                  />
                )}
                {!onTime && gameArray[progress] !== undefined && (
                  <Typography
                    variant="h3"
                    color="primary"
                    style={{ userSelect: "none", marginBottom: '80px' }}
                  >
                    {result}
                  </Typography>
                )}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', marginTop: '30px', minWidth: '250px' }}>
                  {gameArray[progress] !== undefined &&
                    AnswerBox(dataForGame, gameArray, progress)
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
  }
};

export default GuessMap;