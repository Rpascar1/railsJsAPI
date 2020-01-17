// const getPlayerData = () =>{
//   return fetch('http://localhost:3000/api/v1/players/')
//     .then(res => res.json())
//     .then(playerData => console.log(playerData))
// }
//
// getPlayerData()


// function postPlayer(playerTest){
// fetch('http://localhost:3000/api/v1/players/',{
//     method: 'POST',
//     headers: {'Content-Type': 'application/json',
//     Accept: "application/json"
//   },
//     body: JSON.stringify({
//       'name': playerTest.name
//     })
// })
// .then(response => response.json())
// // .then((player_obj) => {
// //   let new_player = player_obj
//   console.log('Success:', player)
//   }

//postPlayer(player)

// const newPlayer = player => {
//
//   const options = {
//
//     method: 'POST',
//     name: JSON.stringify(player),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   }
//
//   return fetch('http://localhost:3000/api/v1/players/')
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(error => console.error(`Error:${error}`))
//
// }
//
// console.log(newPlayer);
