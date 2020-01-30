import styled from "styled-components";
import { styling } from "../../../utilities";

import { Body, ListItem } from "./Body";
import { Footer } from "./Footer";

const StyledCard: any = styled.div`
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

StyledCard.Body = Body;
StyledCard.ListItem = ListItem;
StyledCard.Footer = Footer;

export default StyledCard;
