import React,{useState,useContext} from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css';

const Endscreen = () => {
  const {currScore,setCurrScore,setGameState}=useContext(QuizContext);
  const {name,setName}=useContext(QuizContext);
  const restartQuiz=()=>{
    setCurrScore(0);
       setGameState("menu")
       setName(" ")
  }
  return (
    <div className='endScreen'>
      <h1>Congratulations on finishing your quiz</h1>
      <h2>Hello,{name} Your Score is {currScore}/{Questions.length}</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Endscreen;
