import React from "react";
import { ICardProps } from "../Card.types";

import { Spinner, Error } from "../../../common/ui";
import StyledCard from "../style";

export const CardComponent: React.FC<ICardProps> = props => {
  const error: boolean = false;
  const loading: boolean = false;

  if (loading) return <Spinner size={5} />;
  if (error && !loading) return <Error errors={{ t: "hghh", jj: "Test" }} bg />;
  if (true) {
    return (
      <StyledCard>
        <StyledCard.Body>
          <StyledCard.ListItem>
            <span>Max 10 PBB 10%:</span>
            <span>{""}</span>
          </StyledCard.ListItem>

          <StyledCard.ListItem>
            <span>Max 15 PBB 90%:</span>
            <span>{""}</span>
          </StyledCard.ListItem>

          <StyledCard.ListItem>
            <span>Överskjutande fast lön:</span>
            <span>{""}</span>
          </StyledCard.ListItem>

          <StyledCard.ListItem>
            <span>Föräldralön upp till 10 PBB:</span>
            <span>{""}</span>
          </StyledCard.ListItem>

          <StyledCard.ListItem>
            <span>Föräldralön över 10 PBB:</span>
            <span>{""}</span>
          </StyledCard.ListItem>
        </StyledCard.Body>

        <StyledCard.Footer>
          <span>Total föräldralön/mån:</span>
          <span>4500000 kr</span>
        </StyledCard.Footer>
      </StyledCard>
    );
  }
};
