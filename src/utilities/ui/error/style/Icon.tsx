import styled from "styled-components";
import { colors } from "../../../config";

export const Icon: any = styled.span`
  border: 3px solid ${colors.danger};
  border-radius: 50%;
  padding: 0px 3px;
  margin-right: 5px;
  font-size: 12px;

  &::before {
    content: "X";
    color: ${colors.danger};
    font-weight: bold;
  }
`;
