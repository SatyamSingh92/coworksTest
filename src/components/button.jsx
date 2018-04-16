import React from 'react';

const Buttons = ({onRollDice, onNewGame, onHold}) => {

  return (
    <div>
    <button onClick={ () => onNewGame() }  className="btn-new"><i className="ion-ios-plus-outline"></i>New game</button>
    <button onClick={ () => RollDice() } className="btn-roll"><i className="ion-ios-loop"></i>Roll dice</button>
    </div>
  );
};


export default Buttons;
