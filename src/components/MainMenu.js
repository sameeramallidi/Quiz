import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';
const MainMenu = () => {
  const {gameaState,setGameState}=useContext(QuizContext);
  const {name,setName}=useContext(QuizContext);
  const handleChange=(e)=>{
    setName(e.target.value);
  }
  return (
    <div className='Menu'>
     <div className='text-container'>
     <h3>Hello, Welcome to Modern Family Trivia.</h3> 
      <h3>Consider this to be a sastha Buzzfeed Quiz.</h3>
      <h3>Please enter your name</h3>
      <input placeholder='Ex:John Smith' onChange={handleChange}></input>
     </div>
      <button onClick={()=>{setGameState("quiz")}}>Get started</button>
      console.log(input)
    </div>
  )
}

export default MainMenu
