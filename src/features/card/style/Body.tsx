import styled from "styled-components";
import { colors } from "../../../utilities/config";

export const Body = styled.ul`
  list-style: none;
  padding: 15px;
`;

export const ListItem = styled.li`
  padding: 10px 5px 5px;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid #eeeeee;
  }

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
  }
`;
