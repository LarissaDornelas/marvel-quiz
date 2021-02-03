import styled from "styled-components";
import { theme } from "styles/theme";

const QuestionImage = styled.img`
  max-height: 200px;
  margin-bottom: 12px;
`;

const AnswerButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected }) =>
    selected ? `${theme.colors.primary}` : "#1f2650"};
  color: #fff;
  border: none;
  padding: 12px;
  margin: 0 20px 12px 20px;
  cursor: pointer;
  outline: none;
  text-align: left;

  &:hover {
    background-color: ${theme.colors.primary};
  }
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

export { AnswerButton, ConfirmButton, QuestionImage };
