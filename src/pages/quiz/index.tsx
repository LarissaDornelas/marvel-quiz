import React, { useState } from "react";
import { useRouter } from "next/router";
import { Content, QuizContainer } from "styles/common";
import { AnswerButton, ConfirmButton, QuestionImage } from "styles/quiz";
import db from "../../../db.json";

export default function Quiz() {
  enum Result {
    SUCCESSFUL,
    ERROR,
  }

  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const [questionResult, setQuestionResult] = useState<Result | null>(null);

  const { alternatives, answer, description, image, title } = db.questions[
    currentQuestion
  ];

  function handleConfirmQuestion() {
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
    }, 1000);
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
            onClick={() => setSelectedAnswer(index)}
          >
            {item}
          </AnswerButton>
        ))}
        {questionResult === Result.SUCCESSFUL && <h1>OK!</h1>}
        {questionResult === Result.ERROR && <h1>aff!</h1>}
        {questionResult === null && (
          <ConfirmButton onClick={handleConfirmQuestion}>Confirm</ConfirmButton>
        )}
      </Content>
    </QuizContainer>
  );
}
