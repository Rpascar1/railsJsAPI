document.querySelector('.btn-roll').addEventListener('click', function(){
  if(gamePlaying){
console.log(player1)
    let dice = Math.floor((Math.random()) * 6) + 1

        diceDOm.style.display = 'block'
        diceDOm.src = 'dice-' + dice + '.png'

          if (dice === 6 && lastDice === 6){
            scores[activePlayer] = 0
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
            nextPlayer()

          } else if(dice !== 1) {
            i++
            playerRolls[activePlayer].push(dice)
            console.log(playerRolls);
            roundScore += dice;
            averageRoundScore[activePlayer].push(roundScore)
            //console.log(averageRoundScore);
            document.querySelector("#current-" + activePlayer).textContent = roundScore
              averageRollsPerTurn[activePlayer].push([i])
              console.log(averageRollsPerTurn[0][1]);
          } else {
            nextPlayer()
            i = 0
          }
              lastDice = dice

              let input = document.querySelector('.final-score').value


              if(input){
                winningScore = input

              } else {
                winningScore

              }

      }

      document.querySelector('.final-score').placeholder=`First to reach ${winningScore} wins!`
      document.querySelector('.final-score').value = ""
})
