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

const  IncrementResult = (onTime,state,gameDiff) => {
	let result = state.length > 0 ? state.reduce((a,b)=> a+b) : 0
	if (onTime) {
		if (gameDiff === '0') {
			result = result * 150
		} else if (gameDiff === '1') {
			result = result * 300
		} else {
			result = result * 450
		}
	} else { 
		if (gameDiff === '0') {
			result = result * 100
		} else if (gameDiff === '1') {
			result = result * 200
		} else {
			result = result * 300
		}
	}
	return result
}

export {IncrementResult}