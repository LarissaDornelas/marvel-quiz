import styled from "styled-components";
import { theme } from "styles";

const Form: any = styled.form`
  display: contents;
`;

Form.Input = styled.input`
  background-color: transparent;
  border: 1px solid ${theme.colors.dark};
  border-radius: 4px;
  height: 45px;
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
