import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Logo } from "styles/home";
import { QuizContainer, Content } from "styles/common";

export default function Home() {
  const [name, setName] = useState("");
  const [validationError, setValidationError] = useState(false);
  const router = useRouter();

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    if (validationError) setValidationError(false);

    setName(event.currentTarget.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name === "") {
      setValidationError(true);
    } else {
      setValidationError(false);
      router.push(`/quiz?name=${name}`);
    }
  }

  return (
    <QuizContainer>
      <Logo />
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
            error={validationError}
          />
          {validationError && (
            <Form.ErrorMessage>Campo Obrigatório</Form.ErrorMessage>
          )}
          <Form.Button type="submit">play</Form.Button>
        </Form>
      </Content>
    </QuizContainer>
  );
}
