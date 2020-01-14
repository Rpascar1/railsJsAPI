/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


let scores, roundScore, activePlayer, gamePlaying, lastDice, winningScore = 100

let diceDOm = document.querySelector('.dice')
let name = false
let player1name, player2name

document.querySelector('.new-player-submit').addEventListener('click',function(){

if (name === false){
  player1name = document.querySelector('.new-player').value
  document.getElementById('name-0').textContent = player1name

  name = true
    document.querySelector('.new-player').placeholder='Enter Player 2 name'
    document.querySelector('.new-player').value = '';
  document.querySelector('.new-player-submit').addEventListener('click',function(){
  })
} else if (name === true) {

  player2name = document.querySelector('.new-player').value
  document.getElementById('name-1').textContent = player2name
  document.querySelector('.new-player').placeholder='May you be a champion!'
  document.querySelector('.new-player').value = ''
  name = false
  document.querySelector('.new-player-submit').style.display = 'none'
}

})

init()

document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
    let dice = Math.floor((Math.random()) * 6) + 1

        diceDOm.style.display = 'block'
        diceDOm.src = 'dice-' + dice + '.png'
          if (dice === 6 && lastDice === 6){
            scores[activePlayer] = 0
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
            nextPlayer()

          } else if(dice !== 1) {
            roundScore += dice;

            document.querySelector("#current-" + activePlayer).textContent = roundScore
          } else {
            nextPlayer()
          }
              lastDice = dice

              let input = document.querySelector('.final-score').value


              if(input){
                winningScore = input

              } else {
                winningScore = 100

              }

      }

      document.querySelector('.final-score').placeholder=`First to reach ${winningScore} wins!`
      document.querySelector('.final-score').value = ""
})
    document.querySelector('.btn-hold').addEventListener('click', function(){
          if (gamePlaying){
            scores[activePlayer] += roundScore

            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
            diceDOm.style.display = 'none'


            if (scores[activePlayer] >= winningScore ) {
              document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
              document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
              document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
              gamePlaying = false
            } else {
                nextPlayer()
              }
            }
          })

  function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    diceDOm.style.display = 'none'
  }

  document.querySelector('.btn-new').addEventListener('click', init)

    function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true

    diceDOm.style.display = 'none'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
  }




// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector(".dice").style.display = 'none'
