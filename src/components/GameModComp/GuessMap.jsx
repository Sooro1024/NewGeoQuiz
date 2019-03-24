import React from 'react';
import {
    Button,
    Grow,
    LinearProgress,
    Typography,
    Slide
} from "@material-ui/core";
import Timer from "./Timer";
import ResultOfGame from "./ResultOfGame";
import MapComp from './MapComp';

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
                <div style={{display: 'flex'}}>
                    <MapComp gameArray={gameArray} progress={progress} />
                    <div style={{display: 'flex', flexDirection: 'column'}}>
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
                  style={{ userSelect: "none" }}
                >
                  {result}
                </Typography>
              )}
              <div style={{display: 'flex', flexDirection: 'column'}}>
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
              <LinearProgress variant="determinate" value={percent} />
              </>
                </Grow>
            </>
            )
    }
}

export default GuessMap