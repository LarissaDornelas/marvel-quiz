import { useState } from "react";
import styled from "styled-components";
import { theme } from "styles";

//styles
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
  max-width: 380px;
  margin: auto 6%;
  padding-top: 35px;

  @media (max-width: 500px) {
    width: 100%;
    margin: auto;
    padding: 100px 10px;
  }
`;

const Content: any = styled.div`
  display: flex;
  background-color: ${theme.colors.secondary};
  width: 100%;
  min-height: 20vh;
  /* min-height: 260px; */
  border: 1px solid ${theme.colors.primary};
  font-size: 0.875rem;
  flex-direction: column;
  margin-top: 10px;

  :last-child {
    margin-bottom: 20px;
  }

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

const Form: any = styled.form`
  display: contents;
`;

Form.Input = styled.input`
  background-color: transparent;
  border: 1px solid ${theme.colors.dark};
  border-radius: 4px;
  height: 35px;
  margin: 0 20px 20px 20px;
  color: #fff;
  padding: 10px;

  :focus {
    outline: none;
  }
`;

Form.Button = styled.button`
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

export default function Home() {
  const [name, setName] = useState("");

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <Container>
      <QuizContainer>
        <Content>
          <Content.Header>
            <h1>Marvel Studios</h1>
          </Content.Header>
          <p>
            How much do you know about the Marvel Universe?
            <br /> Let's see...
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              placeholder="Name"
              onChange={handleChange}
              value={name}
            />
            <Form.Button type="submit">play</Form.Button>
          </Form>
        </Content>
        <Content>
          <h1>Score</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Content>
      </QuizContainer>
    </Container>
  );
}
