import styled from "styled-components";
import config from "../../../utilities/style/config";

import { Body } from "./Body";
import { Footer } from "./Footer";

const { styling } = config;
const Card: any = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #eeeeee;
  background: #fff;
  box-shadow: ${styling.borderShadow()};
  transition: 0.4s;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${styling.borderShadow(0.3)};
  }
`;

Card.Body = Body;
Card.Footer = Footer;

export default Card;
