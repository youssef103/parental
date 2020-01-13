import styled from "styled-components";

import { IHint } from "../IHint";
import { colors } from "../../../utilities/config";

export const HintText = styled.p<IHint>`
  position: absolute;
  top: 26px;
  left: -83px;
  font-size: 14px;
  padding: 15px 10px;
  z-index: 10;
  /*width: 350px;*/
  display: none;
  border: 2px solid ${colors.primary};
  background: ${colors.secondary};
  color: ${colors.white};
  white-space: pre;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid ${colors.primary};
    position: absolute;
    top: -10px;
    left: 86px;
  }
`;
