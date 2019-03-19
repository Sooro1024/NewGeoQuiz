import React from "react";
import { Card, CardContent, CardMedia, CardHeader, Button, Grow } from "@material-ui/core";

let random  = []
let AnswerBox = (dataForGame)=>{
  for (let i = 0 ; random.length < 3; i++) {
    let el = Math.floor(Math.random() * (dataForGame.length - 0) + 0);
    if(!random.some(e => e === el)){
    random.push(el)
    }
  }
}



const GuessFlag = ({ gameArray, dataForGame, progress }) => {
  
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
            image={`${gameArray[4].flag}`}
            />
        </CardContent>
      </Card>
      </div>
      <div>
        {progress}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-center', maxWidth: '80%'}}>
      <Button variant='contained' color='primary'>{dataForGame[random[0]].name}</Button>
      <Button variant='contained' color='primary'>{dataForGame[random[1]].name}</Button>
      <Button variant='contained' color='primary'>{dataForGame[random[2]].name}</Button>
      <Button variant='contained' color='primary'>{dataForGame[random[3]].name}</Button>
      </div>
      </div>
      </Grow>
    );
  }
};

export default GuessFlag;
