import styled from "styled-components";
import { theme } from "styles";

const Form: any = styled.form`
  display: contents;
`;

Form.Input = styled.input<{ error: boolean }>`
  background-color: transparent;
  border: 1px solid ${({ error }) => (error ? "red" : theme.colors.dark)};
  border-radius: 4px;
  height: 45px;
  margin: 0 20px 20px 20px;
  color: ${({ error }) => (error ? "red" : "#fff")};
  padding: 10px;

  :focus {
    outline: none;
  }
`;

Form.ErrorMessage = styled.span`
  color: red;
  padding-left: 20px;
  margin-top: -18px;
  margin-bottom: 20px;
`;

Form.Button = styled.button`
  background-color: ${theme.colors.darkVariation};
  border-radius: 4px;
  height: 45px;
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

export { Form };
