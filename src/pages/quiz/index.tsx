import React from "react";

import { QuizContainer } from "styles/common";
import { QuizProvider, QuizContext } from "contexts/QuizContext";
import { Questions, Result } from "components";

export default function Quiz() {
  return (
    <QuizProvider>
      <QuizContext.Consumer>
        {({ showResult }) => (
          <QuizContainer>
            {!showResult ? <Questions /> : <Result />}
          </QuizContainer>
        )}
      </QuizContext.Consumer>
    </QuizProvider>
  );
}
