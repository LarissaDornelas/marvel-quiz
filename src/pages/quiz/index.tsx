import React from "react";

import { QuizContainer } from "styles/common";
import { QuizProvider, QuizContext } from "contexts/QuizContext";
import { Questions, Result } from "components";
import { Logo } from "styles/home";

export default function Quiz() {
  return (
    <QuizProvider>
      <QuizContext.Consumer>
        {({ showResult }) => (
          <QuizContainer>
            <Logo />
            {!showResult ? <Questions /> : <Result />}
          </QuizContainer>
        )}
      </QuizContext.Consumer>
    </QuizProvider>
  );
}
