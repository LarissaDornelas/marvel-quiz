import styled from "styled-components";
import { theme } from "styles/theme";
import { Result } from "types";

const QuestionImage = styled.img`
  max-height: 200px;
  margin-bottom: 12px;
`;

const AnswerButton = styled.button<{ selected: boolean; disabled: boolean }>`
  background-color: ${({ selected }) =>
    selected ? `${theme.colors.primary}` : "#1f2650"};
  color: #fff;
  border: none;
  padding: 12px;
  margin: 0 20px 12px 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "ponter")};
  outline: none;
  text-align: left;

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "none" : theme.colors.primary};
  }
`;

const ResultContainer: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

ResultContainer.ResultIcon = styled.div<{ value: Result }>`
  position: relative;
  height: 60px;
  width: 60px;
  background-color: red;
  border-radius: 50%;
  margin: 20px;

  ::after {
    content: "X";
    top: 20px;
    left: 20px;
    color: #fff;
    position: absolute;
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

export { AnswerButton, ConfirmButton, QuestionImage, ResultContainer };
