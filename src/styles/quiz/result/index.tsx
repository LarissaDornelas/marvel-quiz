import styled from "styled-components";
import { theme } from "styles/theme";

const BackButton = styled.button`
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

const FinalResult: any = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

FinalResult.Title = styled.h1<{ result: string }>`
  padding: 15px;
  font-size: 1.25rem !important;
  span {
    color: ${({ result }) => (result ? result : theme.colors.error)};
  }
`;

const RanckingContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 30px 30px 30px;
`;

const Rancking: any = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${theme.colors.primary};
  height: 250px;
  max-height: 250px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 50px;
  }
`;

const RackingItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const RackingItemContent = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${theme.colors.primary};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;

  p {
    text-align: center;
    line-height: 1rem;
  }
`;

const RackingItemIcon = styled.div<{ color?: string }>`
  display: flex;
  position: absolute;
  height: 30px;
  width: 30px;
  top: 50%;
  left: 5px;
  transform: translate(0, -50%);
  border-radius: 50%;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background-color: ${({ color }) => (color ? color : "burlywood")};
`;

export {
  FinalResult,
  RanckingContainer,
  Rancking,
  RackingItemContainer,
  RackingItemContent,
  RackingItemIcon,
  BackButton,
};
