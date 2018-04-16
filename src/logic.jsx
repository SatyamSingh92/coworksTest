import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Player from './components/player';
import Buttons from './components/button';

const gameConf = {
  playerState: [
    {
      playerName: "P1",
      playerId: 1,
      totalscore: 0,
      eachroundscore: 0,
      isActive: true,
      isWinner: null
    },
    {
      playerName: "P2",
      playerId: 2,
      totalscore: 0,
      eachroundscore: 0,
      isActive: false,
      isWinner: null
    }
  ],
  diceValue: 0
};



class App extends Component {
  constructor(props){
    super(props);
    this.state = gameConf;

  }

  newGame(){
    this.setState(gameConf);
  }

  onRollDice(){
    let diceValue = Math.floor(Math.random() * 6) + 1;
    this.setState({ diceValue });
     
    if( (diceValue%3) != 0 ) {
      const playerState = this.state.playerState.map(player => {
        if (player.isActive) { 
          return {
            ...player,
            eachroundscore: player.eachroundscore + diceValue,
            totalscore : player.eachroundscore + diceValue
          }
        }
        return player
      });
      console.log('playerstate', playerState);
      this.setState({playerState})
    }
    else {
      // alert('got the divisor change to next player');
        this.nextPlayer();
      }

  } 


  nextPlayer(){ 
    alert('came in next player');
    
    let playerState = this.state.playerState.map(player => {
      if (player.isActive) {
        return {
          ...player,
          eachroundScore: player.eachroundscore,
          totalscore : player.totalscore,
          isActive: !player.isActive
        }
      }else{
        return {
          ...player,
          eachroundScore: player.eachroundscore,
          totalscore : player.totalscore,
          isActive: !player.isActive
        }
      }
    });

    this.setState({ playerState });
  }


  render(){
    let players = this.state.playerState;
    let diceValue = this.state.diceValue;
    return (
      <div className="wrapper clearfix">
        {
          players.map(player => {
            return (
              <Player
                playerName={ player.playerName }
                eachroundscore={ player.eachroundscore }
                totalscore={ player.totalscore }
                isWinner={ player.isWinner }
                isActive={ player.isActive }
                key={ player.playerId }
                pId={ player.playerId }
                />
            )
          })
        }

        <Buttons
          onRollDice={ diceValue => this.onRollDice() }
          onNewGame={ () => this.newGame() }
          />

        { diceValue !== 0 && <img src={require(`../images/huge-dice${diceValue}.png`)} className="dice" /> }

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
