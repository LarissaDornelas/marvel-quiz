import styled, { keyframes } from "styled-components";
import { theme } from "styles/theme";
import { Result } from "types";

const handleQuestionBackground = (result: Result | null) => {
  switch (result) {
    case Result.SUCCESSFUL:
      return theme.colors.successful;
    case Result.ERROR:
      return theme.colors.error;
    default:
      return theme.colors.primary;
  }
};

const QuestionImage = styled.img`
  max-height: 200px;
  margin-bottom: 12px;
`;

const AnswerButton = styled.button<{
  selected: boolean;
  result: Result | null;
}>`
  background-color: ${({ selected, result }) =>
    selected ? handleQuestionBackground(result) : "#1f2650"};
  color: #fff;
  border: none;
  padding: 12px;
  margin: 0 20px 12px 20px;
  cursor: ${({ result }) => (result !== null ? "not-allowed" : "ponter")};
  outline: none;
  text-align: left;

  &:hover {
    background-color: ${({ result }) =>
      result !== null ? "none" : theme.colors.primary};
  }
`;

const ResultContainer: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

ResultContainer.ResultIcon = styled.div<{ value: Result }>`
  height: 50px;
  width: 50px;
  background-image: ${({ value }) =>
    value === Result.ERROR ? "url(/icons/close.svg)" : "url(/icons/check.svg)"};
  background-repeat: no-repeat;
  background-size: cover;
  margin: 16px;
`;

const ConfirmButton = styled.button`
  background-color: ${theme.colors.darkVariation};
  border-radius: 4px;
  height: 35px;
  margin: 0 20px 20px 20px;
  text-transform: uppercase;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${theme.colors.lightVariation};
  }
`;

const loading = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 100%;
  }
`;

const LoadingAnimation = styled.div<{ value: Result | null }>`
  width: 100%;
  height: 10px;
  background-color: ${({ value }) =>
    value === Result.ERROR ? theme.colors.error : theme.colors.successful};
  animation: 2000ms ${loading} ease-in-out;
`;

export {
  AnswerButton,
  ConfirmButton,
  QuestionImage,
  ResultContainer,
  LoadingAnimation,
};
