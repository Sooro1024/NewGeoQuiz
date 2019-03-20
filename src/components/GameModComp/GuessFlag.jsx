import React from "react";
import { Card, CardContent, CardMedia, CardHeader, Button, Grow } from "@material-ui/core";
import CircularProgressbar from 'react-circular-progressbar';
import GuessFlagStyles from './GuessFlagStyles'

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

const styles = GuessFlagStyles

const GuessFlag = ({ gameArray, dataForGame, progress, CheckTheAnswer, result }) => {

  const percent = Math.round(progress*6.6)
  if (gameArray === null) {
    return <div></div>;
  } else {
    
    return (
      <Grow in={gameArray !== null}>
      <div>
      <div style={styles.cardAndProgressWrapper}>
      <Card style={{minWidth: '550px'}}>
        <CardHeader title={`Which country flag is it ?`} />
        <CardContent>
          <CardMedia
            style={styles.CardMedia}
            image={`${gameArray[progress].flag}`}
            />
        </CardContent>
      </Card>
      <CircularProgressbar percentage={percent} text={`${result*1000}`} styles={styles.CircularProgressbar} />
      </div>
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