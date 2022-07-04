import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=15&category=10&difficulty=easy&type=multiple`
    );
    setQuestions(data.results);
  };
  return (
    <div className="app" >

      <Routes>
        <Route path="/" element={
          <Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />}

        ></Route>
        <Route path="/quiz" element={<Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
        />}>

        </Route>
        <Route path="/result" element={
          <Result name={name} score={score} />
        }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
