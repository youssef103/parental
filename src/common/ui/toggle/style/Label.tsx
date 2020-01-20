import styled from "styled-components";
import { ToggleButton } from "./Button";

import { colors } from "../../../../utilities/config";

export const ToggleLabel: any = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 70px;
  height: 25px;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  background: ${colors.darkGray};
  border: 1px solid ${colors.white};

  &:active ${ToggleButton} {
    width: 60px;
  }
`;
