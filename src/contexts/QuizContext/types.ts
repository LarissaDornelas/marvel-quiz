import { Dispatch, SetStateAction } from "react";

export enum Result {
  SUCCESSFUL,
  ERROR,
}

export interface IQuizContext {
  questionResult: Result | null;
  loadingNextQueston: boolean;
  currentQuestion: number;
  selectedAnswer: number | null;
  showResult: boolean;
  setSelectedAnswer: Dispatch<SetStateAction<number | null>>;
  handleConfirmQuestion: () => void;
}
