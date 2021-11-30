const team ={
    _players:[
     {
        firstName:'Brain',
        lastName:'Sanchez',
        age:34
     },
     {
        firstName:'Josh',
        lastName:'Turd',
        age:21
     },
     {
        firstName:'Kevin',
        lastName:'Munar',
        age:28
     }
    ],
    _games:[
      {
        opponent:'Broncos',
        teamPoints:54,
        opponentPoints: 67
      },
      {
        opponent:'Suns',
        teamPoints:54,
        opponentPoints: 97
      },
      {
        opponent:'Magic',
        teamPoints:84,
        opponentPoints: 67
      }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
  
    addPlayer(firstName, lastName,age){
     let player = {
       firstName:firstName,
       lastName:lastName,
       age:age
     }
     this.players.push(player)
    },
    addGame(opponent,teamPoints,opponentPoints){
      let game = {
        opponent:opponent,
        teamPoints:teamPoints,
        opponentPoints:opponentPoints
      }
      this.games.push(game)
    }
  }
  
  
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  console.log(team.players)
  
  team.addGame('Drunk Gods', 53,64)
  team.addGame('Knicks', 53,64)
  team.addGame('Nets', 53,64)
  console.log(team.games)
  