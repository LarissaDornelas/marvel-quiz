import { useRouter } from "next/router";
import React, { createContext, useState } from "react";
import { api } from "services/api";
import colorGenerator from "util/colorGenerator";
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

  const router = useRouter();

  async function handleResult(points: number) {
    setShowResult(true);
    const { name } = router.query;

    const color = colorGenerator();

    const data = {
      name,
      color,
      points,
    };

    await api.post("/players", data);
  }

  function handleConfirmQuestion() {
    setLoadingNextQuestion(true);
    let newRightAnswers = rightAnswers;

    if (answer === selectedAnswer) {
      newRightAnswers += 1;
      setRightAnswers(newRightAnswers);
      setQuestionResult(Result.SUCCESSFUL);
    } else {
      setQuestionResult(Result.ERROR);
    }
    setTimeout(() => {
      if (currentQuestion === db.questions.length - 1)
        handleResult(newRightAnswers * 10);
      else setCurrentQuestion(currentQuestion + 1);
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
