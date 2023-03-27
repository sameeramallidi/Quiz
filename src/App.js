import React, {useState, useContext} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import Endscreen from './components/Endscreen';
import './App.css';

import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState,setGameState]=useState("menu");
  const [currScore,setCurrScore]=useState(0);
  const [name,setName]=useState("");
  return (
    <div className="App">
      <QuizContext.Provider value={{gameState,setGameState,currScore,setCurrScore,name,setName}}>
        <h1>Quiz App</h1>
        {gameState==="menu" && <MainMenu />}
        {gameState==="quiz" && <Quiz />}
        {gameState==="endscreen" && <Endscreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
