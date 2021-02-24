import React, { useCallback, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
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
import { api } from "services/api";
import { IPlayer } from "./types";
import db from "../../../db.json";
import { theme } from "styles";

const Result: React.FC = () => {
  const router = useRouter();

  const { rightAnswers } = useContext(QuizContext);
  const [players, setPlayers] = useState<IPlayer[]>([]);

  const result = rightAnswers ? rightAnswers * 10 : 0;

  function getResultColor() {
    const average = (rightAnswers / db.questions.length) * 100;

    return average < 50 ? theme.colors.error : theme.colors.successful;
  }

  const getPlayers = useCallback(async () => {
    const { data } = await api.get<IPlayer[]>("/players");
    const sortData = data.sort((a, b) => b.points - a.points);

    setPlayers(sortData);
  }, []);

  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  return (
    <Content>
      <Content.Header>
        <h1>Result</h1>
      </Content.Header>
      <FinalResult>
        <FinalResult.Title result={getResultColor()}>
          You scored <span>{result}</span> points!
        </FinalResult.Title>
      </FinalResult>

      <RanckingContainer>
        <Rancking>
          {players.map((player: IPlayer, index) => (
            <RackingItemContainer key={index}>
              <RackingItemContent>
                <RackingItemIcon color={player.color}>
                  {player.name[0]}
                </RackingItemIcon>
                <p>{player.name}</p>
                <p>
                  {player.points} <br />
                  points
                </p>
              </RackingItemContent>
            </RackingItemContainer>
          ))}
        </Rancking>
      </RanckingContainer>
      <BackButton onClick={() => router.push("/")}>Back to home</BackButton>
    </Content>
  );
};

export { Result };
