// filepath: vsls:/financial-literacy-game/src/components/Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const startGame = () => {
    history.push('/game');
  };

  return (
    <div>
      <h1>Welcome to the Financial Literacy Game</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default Home;