import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";
const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [chosenOption, setChosenOption] = useState(" ");

  const { gameaState, setGameState } = useContext(QuizContext);
  const { currScore, setCurrScore } = useContext(QuizContext);

  const handleClick = (event) => {
    if (Questions[currQuestion].answer === chosenOption) {
      setCurrScore((prevState) => prevState + 1);
    }
    setCurrQuestion((prevState) => prevState + 1);
  };
  const finishQuiz = (e) => {
    if (Questions[currQuestion].answer === chosenOption) {
      setCurrScore((prevState) => prevState + 1);
    }
    setGameState("endscreen");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].propmt}</h1>
      <div className="options">
        <button  type="" onClick={() => setChosenOption("optionA")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setChosenOption("optionB")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setChosenOption("optionC")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setChosenOption("optionD")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      <div className="footer">
        {currQuestion === Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish</button>
        ) : (
          <button onClick={handleClick}>Next Question</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
