import styled from "styled-components";
import config from "../../../utilities/style/config";

const { styling } = config;

export const Body = styled.ul`
  list-style: none;
  padding: 15px;

  li {
    padding: 10px 5px 5px;
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      border-bottom: 1px solid #eeeeee;
    }

    &:hover {
      background: ${styling.colors.primary};
      color: ${styling.colors.white};
    }
  }
`;
