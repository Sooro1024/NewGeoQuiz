import React from "react";
import { Card, CardContent, CardMedia, CardHeader, Button, Grow, LinearProgress, Typography } from "@material-ui/core";
import GuessFlagStyles from './GuessFlagStyles';
import Timer from "./Timer";

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

const styles = GuessFlagStyles;

const GuessFlag = ({ gameArray, dataForGame, progress, CheckTheAnswer, result, onTime }) => {

  const percent = Math.round(progress*6.6)
  if (gameArray === null) {
    return <div></div>;
  } else {
    
    return (
      <Grow in={gameArray !== null}>
      <div>
      <div style={styles.cardAndProgressWrapper}>
      <Card style={{minWidth: '550px'}}>
        <CardHeader title='Which country flag is it ?' subheader={`Question ${progress+1}`} />
        <CardContent style={{paddingTop: '0'}}>
          <CardMedia
            style={styles.CardMedia}
            image={`${gameArray[progress].flag}`}
            />
        </CardContent>
      </Card>
      {onTime && <Timer result={result} progress={progress} CheckTheAnswer={CheckTheAnswer} />}
      {!onTime && <Typography variant='h3' color='primary'>{result}</Typography>}
      </div>
      <LinearProgress variant="determinate" value={percent} />
      <div style={styles.AnswerBoxWrapper}>
        <div style={styles.AnswerBox}>
        {AnswerBox(dataForGame,gameArray,progress)
          .sort((a,b)=> {return (0.5 - Math.random())})
          .map(el => <Button style={{marginBottom: '10px'}} onClick={()=>CheckTheAnswer(`${el.name}`)} variant='contained' color='primary' key={el.name}>{el.name}</Button>)}
        </div>
      </div>
      </div>
      </Grow>
    );
  }
};

export default GuessFlag;