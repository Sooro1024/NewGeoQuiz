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

export {AnswerBox}