import styled from "styled-components";
import config from "../../../utilities/config";

const { styling } = config;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  font-size: 1.05em;
  font-weight: bold;

  background: ${styling.colors.primary};
  color: ${styling.colors.white};
`;
