import React, { useState } from "react";
import { useRouter } from "next/router";
import { Content, QuizContainer } from "styles/common";
import {
  AnswerButton,
  ConfirmButton,
  QuestionImage,
  ResultContainer,
  LoadingAnimation,
} from "styles/quiz";
import { Result } from "types";
import db from "../../../db.json";

export default function Quiz() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [questionResult, setQuestionResult] = useState<Result | null>(null);
  const [loadingNextQueston, setLoadingNextQuestion] = useState<boolean>(false);

  const { alternatives, answer, description, image, title } = db.questions[
    currentQuestion
  ];

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
        ? router.push("/")
        : setCurrentQuestion(currentQuestion + 1);
      setQuestionResult(null);
      setSelectedAnswer(null);
      setLoadingNextQuestion(false);
    }, 2000);
  }

  return (
    <QuizContainer>
      <Content>
        <Content.Header>
          <h1>Question {currentQuestion + 1} of 10</h1>
        </Content.Header>
        <QuestionImage src={image} />
        <h1>{title}</h1>
        <p>{description}</p>
        {alternatives.map((item, index) => (
          <AnswerButton
            key={index}
            selected={index === selectedAnswer}
            result={questionResult}
            disabled={loadingNextQueston}
            onClick={() => setSelectedAnswer(index)}
          >
            {item}
          </AnswerButton>
        ))}
        <ResultContainer>
          {questionResult !== null && (
            <ResultContainer.ResultIcon value={questionResult} />
          )}
        </ResultContainer>
        {questionResult === null && (
          <ConfirmButton onClick={handleConfirmQuestion}>Confirm</ConfirmButton>
        )}

        {loadingNextQueston && <LoadingAnimation value={questionResult} />}
      </Content>
    </QuizContainer>
  );
}
