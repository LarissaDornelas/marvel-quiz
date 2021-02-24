import styled from "styled-components";
import { theme } from "styles";

const Form: any = styled.form`
  display: contents;
`;

const Logo = styled.div`
  background-image: url(/img/logo.png);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100px;
  width: 165px;
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

export { Form, Logo };
