import styled from "styled-components";
import { HintText } from "./HintText";
import { colors } from "../../../../utilities";

export const HintIcon = styled.span`
  background: ${colors.primary};
  padding: 0 7px;
  border: 1px solid ${colors.secondary};
  border-radius: 50%;
  color: ${colors.white};
  font-family: serif;
  font-style: italic;
  &:hover {
    background: ${colors.secondary};
    + ${HintText} {
      display: block;
    }
  }
`;
