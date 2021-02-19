import React, { useContext } from "react";
import { QuizContext } from "contexts/QuizContext";
import { Content } from "styles/common";
import {
  FinalResult,
  Rancking,
  RanckingContainer,
  RackingItemContainer,
  RackingItemContent,
  RackingItemIcon,
  BackButton,
} from "styles/quiz/result";

const Result: React.FC = () => {
  const { rightAnswers } = useContext(QuizContext);

  const result = rightAnswers ? rightAnswers * 10 : 0;

  return (
    <Content>
      <Content.Header>
        <h1>Result</h1>
      </Content.Header>
      <FinalResult>
        <FinalResult.Title result={result}>
          You scored <span>{result}</span> points!
        </FinalResult.Title>
      </FinalResult>

      <RanckingContainer>
        <Rancking>
          <RackingItemContainer>
            <RackingItemContent>
              <RackingItemIcon>l</RackingItemIcon>
              <p>Larissa Dornelas</p>
              <p>
                500 <br />
                pontos
              </p>
            </RackingItemContent>
          </RackingItemContainer>
          <RackingItemContainer>
            <RackingItemContent>
              <RackingItemIcon>l</RackingItemIcon>
              <p>Larissa Dornelas</p>
              <p>
                500 <br />
                pontos
              </p>
            </RackingItemContent>
          </RackingItemContainer>
          <RackingItemContainer>
            <RackingItemContent>
              <RackingItemIcon>l</RackingItemIcon>
              <p>Larissa Dornelas</p>
              <p>
                500 <br />
                pontos
              </p>
            </RackingItemContent>
          </RackingItemContainer>
          <RackingItemContainer>
            <RackingItemContent>
              <RackingItemIcon>l</RackingItemIcon>
              <p>Larissa Dornelas</p>
              <p>
                500 <br />
                points
              </p>
            </RackingItemContent>
          </RackingItemContainer>
          <RackingItemContainer>
            <RackingItemContent>
              <RackingItemIcon>l</RackingItemIcon>
              <p>Larissa Dornelas</p>
              <p>
                500 <br />
                pontos
              </p>
            </RackingItemContent>
          </RackingItemContainer>
        </Rancking>
      </RanckingContainer>
      <BackButton>Back to home</BackButton>
    </Content>
  );
};

export { Result };
