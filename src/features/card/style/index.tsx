import styled from "styled-components";
import { styling } from "../../../utilities/config";

import { Body } from "./Body";
import { Footer } from "./Footer";

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
