import React, { createContext, useState } from "react";
import db from "../../../db.json";

import { IQuizContext, Result } from "./types";

const QuizContext = createContext({} as IQuizContext);

const QuizProvider: React.FC = ({ children }) => {
  const [questionResult, setQuestionResult] = useState<Result | null>(null);
  const [loadingNextQueston, setLoadingNextQuestion] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const { answer } = db.questions[currentQuestion];

  function handleConfirmQuestion() {
    setLoadingNextQuestion(true);

    if (answer === selectedAnswer) {
      setRightAnswers(rightAnswers + 1);
      setQuestionResult(Result.SUCCESSFUL);
    } else {
      setQuestionResult(Result.ERROR);
    }
    setTimeout(() => {
      currentQuestion === db.questions.length - 1
        ? setShowResult(true)
        : setCurrentQuestion(currentQuestion + 1);
      setQuestionResult(null);
      setSelectedAnswer(null);
      setLoadingNextQuestion(false);
    }, 2000);
  }
  return (
    <QuizContext.Provider
      value={{
        questionResult,
        loadingNextQueston,
        handleConfirmQuestion,
        currentQuestion,
        selectedAnswer,
        setSelectedAnswer,
        showResult,
        rightAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider, QuizContext };
