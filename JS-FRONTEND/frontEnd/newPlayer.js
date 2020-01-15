document.querySelector('.new-player-submit').addEventListener('click',function(){
if (name === false){
  player1name = document.querySelector('.new-player').value
  document.getElementById('name-0').textContent = player1name
  playerArray.push(player1 = new Player (player1name))
  name = true
  document.querySelector('.new-player').placeholder='Enter Player 2 name'
  document.querySelector('.new-player').value = '';
  console.log(player1);
  document.querySelector('.new-player-submit').addEventListener('click',function(){
  })
} else if (name === true) {

  player2name = document.querySelector('.new-player').value
  document.getElementById('name-1').textContent = player2name
    playerArray.push(player2 = new Player (player2name))
    console.log(player2);
  document.querySelector('.new-player').placeholder='May you be a champion!'
  document.querySelector('.new-player').value = ''
  name = false
  document.querySelector('.new-player-submit').style.display = 'none'

}
thisGame = new Game(playerArray)
console.log(thisGame.players);
})
