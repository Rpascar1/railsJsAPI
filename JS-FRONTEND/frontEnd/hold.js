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
