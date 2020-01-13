import React from "react";
import { ICardProps } from "./ICard";

import StyledCard from "./style";

const CardComponent: React.FC<ICardProps> = ({ arrData }) => (
  <StyledCard>
    <StyledCard.Body>
      <StyledCard.ListItem>
        <span>Max 10 PBB 10%:</span>
        <span>{arrData.max10PBB}</span>
      </StyledCard.ListItem>

      <StyledCard.ListItem>
        <span>Max 15 PBB 90%:</span>
        <span>{arrData.max15PBB90}</span>
      </StyledCard.ListItem>

      <StyledCard.ListItem>
        <span>Överskjutande fast lön:</span>
        <span>{arrData.excessFixedSalary}</span>
      </StyledCard.ListItem>

      <StyledCard.ListItem>
        <span>Föräldralön upp till 10 PBB:</span>
        <span>{arrData.parentalSalaryUpto10PBB}</span>
      </StyledCard.ListItem>

      <StyledCard.ListItem>
        <span>Föräldralön över 10 PBB:</span>
        <span>{arrData.parentalSalaryAbove10PBB}</span>
      </StyledCard.ListItem>
    </StyledCard.Body>

    <StyledCard.Footer>
      <span>Total föräldralön/mån:</span>
      <span>4500000 kr</span>
    </StyledCard.Footer>
  </StyledCard>
);

export default CardComponent;
