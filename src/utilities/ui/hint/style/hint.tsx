import styled from "styled-components";
import config from "../../../config";

const { styling } = config;

export const HintText = styled.p`
  position: absolute;
  top: 26px;
  left: -83px;
  font-size: 14px;
  border: 2px solid ${styling.colors.primary};
  padding: 15px 10px;
  background: ${styling.colors.secondary};
  color: ${styling.colors.white};
  z-index: 10;
  width: 205px;
  display: none;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid ${styling.colors.primary};
    position: absolute;
    top: -10px;
    right: 105px;
  }
`;

export const HintIcon = styled.span`
  background: ${styling.colors.primary};
  padding: 0 7px;
  border: 1px solid ${styling.colors.secondary};
  border-radius: 50%;
  color: ${styling.colors.white};
  font-family: serif;
  font-style: italic;
  &:hover {
    background: ${styling.colors.secondary};
    + ${HintText} {
      display: block;
    }
  }
`;
