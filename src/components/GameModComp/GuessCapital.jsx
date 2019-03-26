import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Grow,
  LinearProgress,
  Typography,
  Slide
} from "@material-ui/core";
import GuessFlagStyles from "./GuessFlagStyles";
import Timer from "./Timer";
import ResultOfGame from "./ResultOfGame";
import GuessCapitalPhoto from "./GuessCapitalPhoto";
import { AnswerBox } from "./AnswerBox";

const styles = GuessFlagStyles;

const GuessCapital = ({
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
  } else if (gameArray[progress] !== undefined) {
    return (
      <>
        <Grow in={gameArray[progress] !== undefined} mountOnEnter unmountOnExit>
          <div>
            <div style={styles.cardAndProgressWrapper}>
              <Card style={{ minWidth: "550px" }}>
                <CardHeader
                  title={`Which country capital is ${
                    gameArray[progress].capital
                  } ?`}
                  subheader={`Question ${progress + 1}`}
                />
                <CardContent style={{ paddingTop: "0" }}>
                    <GuessCapitalPhoto
                      gameData={gameArray[progress]}
                      styles={styles.CardMedia}
                      progress={progress}
                    />
                </CardContent>
              </Card>
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
            </div>
            <LinearProgress variant="determinate" value={percent} />
            <div style={styles.AnswerBoxWrapper}>
              <div style={styles.AnswerBox}>
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
        <ResultOfGame result={result} gameMod={gameMod} />
      </Slide>
    );
  }
};

export default GuessCapital