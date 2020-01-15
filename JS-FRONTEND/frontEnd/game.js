/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



class Game {
 constructor(){

   this.player1name
   this.player2name
   this.scores = [0,0]
   this.roundScore = 0
   this.activePlayer = 0
   this.gamePlaying = true
   this.lastDice
   this.winningScore
   this.diceDOm
   // this.newGamethis.playerArray
   this.playerRolls
   this.name = false

   this.initBindingsAndEventListeners()
 }
   initBindingsAndEventListeners(){

        this.nameInput = document.querySelector('.new-player')
        this.submitPlayerName = document.querySelector('.new-player-submit')
        this.submitPlayerName.addEventListener('click',this.handleSubmitPlayerName)
        this.player1name = document.getElementById('name-0')
        this.player2name = document.getElementById('name-1')
        this.roll = document.querySelector('.btn-roll').addEventListener('click', this.handleBtnRoll)
        this.diceDOm = document.querySelector('.dice')
        this.finalScore = document.querySelector('.final-score')
        this.btnHold = document.querySelector('.btn-hold').addEventListener('click', this.handleBtnHold)
        this.init = document.querySelector('.btn-new').addEventListener('click', this.handleNewGame)
    }

    handleSubmitPlayerName = () => {
            console.log(this);
        if (this.name === false){

        this.player1name.textContent = this.nameInput.value
        this.name = true
        this.nameInput.placeholder='Enter Player 2 name'
        this.nameInput.value = '';

      } else if (this.name === true) {

        this.player2name.textContent = this.nameInput.value
        this.nameInput.placeholder='May you be a champion!'
        this.nameInput.value = ''
        document.querySelector('.new-player-submit').style.display = 'none'

      }

    }

    handleBtnRoll = () => {

        if(this.gamePlaying){
          let dice = Math.floor((Math.random()) * 6) + 1

              this.diceDOm.style.display = 'block'
              this.diceDOm.src = 'dice-' + dice + '.png'

                if (dice === 6 && this.lastDice === 6){
                  this.scores[this.activePlayer] = 0
                      document.querySelector('#score-' + this.activePlayer).textContent = this.scores[this.activePlayer]
                  this.nextPlayer()
                  this.diceDOm.style.display = 'block'
                  this.diceDOm.src = 'dice-66.png'
                } else if(dice !== 1) {
                  this.roundScore += dice;
                  document.querySelector("#current-" + this.activePlayer).textContent = this.roundScore
                } else {
                  this.nextPlayer()
                  this.diceDOm.style.display = 'block'
                  this.diceDOm.src = 'dice-1.png'
                }
                    this.lastDice = dice
                    let input = this.finalScore.value
                    if(input){
                      this.winningScore = input
                    } else {
                      this.winningScore
                    }
            }
            this.finalScore.placeholder=`First to reach ${this.winningScore} wins!`
            this.finalScore.value = ""
    }

  nextPlayer() {
    this.activePlayer === 0 ? this.activePlayer = 1 : this.activePlayer = 0;
    this.roundScore = 0
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    this.diceDOm.style.display = 'none'
  }

handleBtnHold = () => {
        if (this.gamePlaying){
          this.scores[this.activePlayer] += this.roundScore

          document.querySelector('#score-' + this.activePlayer).textContent = this.scores[this.activePlayer]
          this.diceDOm.style.display = 'none'


          if (this.scores[this.activePlayer] >= this.winningScore ) {
            document.querySelector('#name-' + this.activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + this.activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + this.activePlayer + '-panel').classList.remove('active')
            this.gamePlaying = false
            alert("You are the Champion!!")
          } else {
              this.nextPlayer()
              this.diceDOm.style.display = 'block'
              this.diceDOm.src = 'other-graveyard.png'
            }
          }



        }

        handleNewGame = () => {

                  this.scores = [0,0];
                  this.roundScore = 0;
                  this.activePlayer = 0;
                  this.gamePlaying = true


                  this.diceDOm.style.display = 'none'
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
                  document.querySelector('.new-player-submit').style.display = 'block'
                  document.querySelector('.new-player').placeholder='Enter Player1 name'
                }


                handleNewGame = () => {

                            this.scores = [0,0];
                            this.roundScore = 0;
                            this.activePlayer = 0;
                            this.gamePlaying = true


                            this.diceDOm.style.display = 'none'
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
                            document.querySelector('.new-player-submit').style.display = 'block'
                            document.querySelector('.new-player').placeholder='Enter Player1 name'
                            this.diceDOm.style.display = 'block'
                            this.diceDOm.src = 'other-graveyard.png'
                          }

}


// let player1name, player2name, scores, roundScore, activePlayer,i, gamePlaying, lastDice, winningScore = 100
// let diceDOm = document.querySelector('.dice')
// let name = false
// let playerArray = []//done
//
// let playerRolls = [[],[]]
// let averageRollsPerTurn = [[],[]]
// let averageRoundScore = [[],[]]
// let gameWinner = []

// init()

// document.querySelector('.new-player-submit').addEventListener('click',function(){
// if (name === false){
//   player1name = document.querySelector('.new-player').value
//   document.getElementById('name-0').textContent = player1name
//   playerArray.push(player1 = new Player (player1name))
//   name = true
//   document.querySelector('.new-player').placeholder='Enter Player 2 name'
//   document.querySelector('.new-player').value = '';
//   console.log(player1);
//   document.querySelector('.new-player-submit').addEventListener('click',function(){
//   })
// } else if (name === true) {
//
//   player2name = document.querySelector('.new-player').value
//   document.getElementById('name-1').textContent = player2name
//     playerArray.push(player2 = new Player (player2name))
//     console.log(player2);
//   document.querySelector('.new-player').placeholder='May you be a champion!'
//   document.querySelector('.new-player').value = ''
//   name = false
//   document.querySelector('.new-player-submit').style.display = 'none'
//
// }
// thisGame = new Game(playerArray)
// console.log(thisGame.players);
// })
//
