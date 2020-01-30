import styled from "styled-components";
import { colors } from "../../../utilities";

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 1.05em;
  font-weight: bold;

  background: ${colors.primary};
  color: ${colors.white};
`;
