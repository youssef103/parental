import styled from "styled-components";
import { ToggleLabel } from "./Label";
import { ToggleButton } from "./Button";

import { colors } from "../../../utilities/config";

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;

  &:checked + ${ToggleLabel} {
    background: ${colors.secondary};
    ${ToggleButton} {
      left: 100%; /*calc(100% - 2px);*/
      transform: translateX(-100%);
      background: ${colors.primary};
    }
  }
`;
