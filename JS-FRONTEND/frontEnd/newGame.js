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
  document.querySelector('.new-player-submit').style.display = 'block'
  document.querySelector('.new-player').placeholder='Enter Player1 name'
}
