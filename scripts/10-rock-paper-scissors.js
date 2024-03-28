let score=JSON.parse(localStorage.getItem('score')) ||{
  wins:0,
  losses:0,
  Tied:0
};
updateScoreElement();
/*if(!score){
  score={
    wins:0,
    losses:0,
    Tied:0
  }
}
*/
function playGame(playerMove){
  const computerMove= pickComputerMove();
  let result='';
  if(playerMove ==='ROCK'){
    if(computerMove ==='ROCK'){
      result='Tie.';
    }else if(computerMove ==='PAPER'){
      result='You lose.';
    }else if(computerMove ==='SCISSORS'){
      result='You win.';
    }
  }else if(playerMove ==='PAPER'){
        if(computerMove ==='ROCK'){
      result='You win.';
    }else if(computerMove ==='PAPER'){
      result='Tie.';
    }else if(computerMove ==='SCISSORS'){
      result='You lose.';
    }
  }else if(playerMove ==='SCISSORS'){
        if(computerMove ==='ROCK'){
      result='You lose.';
    }else if(computerMove ==='PAPER'){
      result='You win.';
    }else if(computerMove ==='SCISSORS'){
      result='Tie.';
    }
  } 
if(result==='You win.'){
  score.wins+=1;
}else if(result==='You lose.'){
  score.losses+=1;
}else if(result==='Tie.'){
  score.Tied+=1;
}
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').innerHTML=`You 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;
}
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML=`Wins ${score.wins},Losses: ${score.losses},Ties: ${score.Tied}`;
}
function pickComputerMove(){
      const constantNumber = Math.random();
      let computerMove='';
      if(constantNumber>=0 && constantNumber<1/3){
      computerMove=('ROCK');
    }else if(constantNumber>= 1/3 && constantNumber<2/3){
      computerMove=('PAPER');
    }else if(constantNumber>= 2/3 && constantNumber<1){
      computerMove=('SCISSORS');
    }
    return computerMove;
  }