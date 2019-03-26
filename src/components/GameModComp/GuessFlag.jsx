import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
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
import {AnswerBox} from "./AnswerBox"

const styles = GuessFlagStyles;

const GuessFlag = ({
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
          <div>
            <div style={styles.cardAndProgressWrapper}>
              <Card style={{ minWidth: "550px" }}>
                <CardHeader
                  title="Which country flag is it ?"
                  subheader={`Question ${progress + 1}`}
                />
                <CardContent style={{ paddingTop: "0" }}>
                  <CardMedia
                    style={styles.CardMedia}
                    image={
                      gameArray[progress] !== undefined
                        ? `${gameArray[progress].flag}`
                        : "noFlag"
                    }
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
        </Grow>
      </>
    );
  }
};

export default GuessFlag