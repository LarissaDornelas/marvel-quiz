import React, { useContext } from "react";

import { QuizContext } from "contexts/QuizContext";
import db from "../../../db.json";

import { Content } from "styles/common";
import {
  ResultContainer,
  LoadingAnimation,
  ConfirmButton,
  AnswerButton,
  QuestionImage,
} from "styles/quiz/questions";

const Questions: React.FC = () => {
  const {
    currentQuestion,
    selectedAnswer,
    questionResult,
    loadingNextQueston,
    handleConfirmQuestion,
    setSelectedAnswer,
  } = useContext(QuizContext);

  const { alternatives, description, image, title } = db.questions[
    currentQuestion
  ];

  return (
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
        <ConfirmButton
          disabled={selectedAnswer === null}
          onClick={handleConfirmQuestion}
        >
          Confirm
        </ConfirmButton>
      )}

      {loadingNextQueston && <LoadingAnimation value={questionResult} />}
    </Content>
  );
};

export { Questions };
