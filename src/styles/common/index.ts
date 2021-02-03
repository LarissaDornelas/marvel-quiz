import styled from "styled-components";
import { theme } from "styles";

const Container = styled.div`
  flex: 1;
  width: 100%;
  background-image: url(/img/marvel-desktop.png);
  background-size: cover;
  background-position: center;

  @media (max-width: 500px) {
    max-height: 250px;
    width: 100%;
    background-image: linear-gradient(to bottom, transparent 25%, #282342 100%),
      url(/img/marvel-mobile.jpg);
  }
`;
const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: auto 6%;
  padding: 45px;
  background-color: #0c0f1fd4;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    margin: auto;
    padding: 100px 10px;
    background-color: transparent;
  }
`;

const Content: any = styled.div`
  display: flex;
  background-color: ${theme.colors.secondary};
  width: 100%;
  min-height: 20vh;
  border: 1px solid ${theme.colors.primary};
  font-size: 0.875rem;
  flex-direction: column;

  margin-top: 20px;

  h1 {
    font-size: 1rem;
    padding: 0 30px;
  }
  p {
    font-size: 0.875rem;
    padding: 10px 30px;
    line-height: 1.4em;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 3% auto;
  }
`;

Content.Header = styled.header`
  padding: 8px 0;
  background-color: ${theme.colors.primary};
`;

export { Container, QuizContainer, Content };
