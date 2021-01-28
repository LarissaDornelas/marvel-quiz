import styled from "styled-components";
import { theme } from "styles";

const Container = styled.div`
  flex: 1;
  width: 100%;
  background-image: url(/img/marvel-bg.png);
  background-size: cover;
  background-position: center;

  @media (max-width: 500px) {
    max-height: 100px;
    width: 100%;
  }
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 10%;
  padding-top: 45px;

  @media (max-width: 500px) {
    width: 100%;
    margin: auto;
    padding: 100px 10px;
  }
`;

const Content: any = styled.div`
  background-color: ${theme.colors.secondary};
  width: 100%;
  margin: 20px;
  height: 250px;
  border: 1px solid ${theme.colors.primary};

  font-size: 0.875rem;

  h1 {
    font-size: 1rem;
  }
  p {
    font-size: 0.875rem;
    margin-left: 15px;
    line-height: 1.4em;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 5% auto;
  }
`;

Content.Header = styled.header`
  padding: 8px 30px;
  background-color: ${theme.colors.primary};
`;

export default function Home() {
  return (
    <Container>
      <QuizContainer>
        <Content>
          <Content.Header>
            <h1>Marvel Studios</h1>
          </Content.Header>
          <p>
            How much do you know about the Marvel Universe?
            <br /> Let's see
          </p>
        </Content>
        <Content>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Content>
      </QuizContainer>
    </Container>
  );
}
