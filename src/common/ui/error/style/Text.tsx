import styled from "styled-components";
import { colors, styling } from "../../../../utilities/config";
import { IError } from "../IError";

export const Text = styled.span<IError>`
  color: ${colors.danger};
  font-size: ${styling.typography.fontSmallSize};
  ${({ bg = false }) => (bg ? "margin-left: 15px" : "")}
`;
