import styled from "styled-components";
import { colors } from "../../../../utilities";
import { IToggle } from "../IToggle";

export const ToggleButton = styled.span<IToggle>`
  content: "";
  position: absolute;
  top: -3px;
  left: 0px;
  width: 28px;
  height: 28px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${({ isOn }) => (isOn ? colors.primary : colors.white)};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  border: 1px solid ${colors.white};
`;
