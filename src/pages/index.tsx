import { useState } from "react";
import { useRouter } from "next/router";
import { Form } from "styles/home";
import { QuizContainer, Content } from "styles/common";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  return (
    <QuizContainer>
      <h1>Logo</h1>
      <Content>
        <Content.Header>
          <h1>Marvel Studios</h1>
        </Content.Header>
        <p>
          How much do you know about the Marvel Universe?
          <br /> Let's see...
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Input placeholder="Name" onChange={handleChange} value={name} />
          <Form.Button type="submit">play</Form.Button>
        </Form>
      </Content>
      <Content>
        <h1>Score</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit.
      </p>
    </QuizContainer>
  );
}
