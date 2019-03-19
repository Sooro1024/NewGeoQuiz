import React from "react";
import { Card, CardContent, CardMedia, CardHeader, Button, Grow } from "@material-ui/core";

let AnswerBox = (dataForGame,gameArray,progress)=>{
  let arrOfAnswer = []
  arrOfAnswer.push(gameArray[progress])
  for (let i = 1 ; arrOfAnswer.length < 4; i++) {
    let el = Math.floor(Math.random() * (dataForGame.length - 0) + 0);
    if(!arrOfAnswer.some(e => e.name === dataForGame[el].name)){
    arrOfAnswer.push(dataForGame[el])
    }
  }
  return arrOfAnswer;
}



const GuessFlag = ({ gameArray, dataForGame, progress, CheckTheAnswer }) => {
  
  if (gameArray === null) {
    return <div></div>;
  } else {
    
    return (
      <Grow in={gameArray !== null}>
      <div className="wrapperOfCard"  >
      <div>
      <Card style={{maxWidth: '500px'}} /*raised={true}*/>
        <CardHeader title={`Which country flag is it ?`} />
        <CardContent>
          <CardMedia
            style={{ minHeight: "300px", /*borderColor: '#3f51b5', borderStyle:'solid'*/}}
            image={`${gameArray[progress].flag}`}
            />
        </CardContent>
      </Card>
      </div>
      <div>
        {progress}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-center', maxWidth: '80%'}}>
      {AnswerBox(dataForGame,gameArray,progress)
        .sort((a,b)=> {return (0.5 - Math.random())})
        .map(el => <Button onClick={()=>CheckTheAnswer(`${el.name}`)} variant='contained' color='primary' key={el.name}>{el.name}</Button>)}
      </div>
      </div>
      </Grow>
    );
  }
};

export default GuessFlag;