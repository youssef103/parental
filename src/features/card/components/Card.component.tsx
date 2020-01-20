import React from "react";

//import { Spinner, Error } from "../../../common/ui";
import StyledCard from "../style";
import {
  ICard,
  IMapCardStateToProps,
  IMapCardStateToDispatch
} from "../Card.types";
import { Row } from "../../../utilities/styles/layout";

export const CardComponent: React.FC<IMapCardStateToProps &
  IMapCardStateToDispatch> = ({ cards, loaded, errors }) => {
  //if (!loaded) return <Spinner size={5} />;
  /*if (errors && Object.values(errors).map(value => value !== undefined))
    return <Error errors={errors} bg />;*/

  return (
    <Row col={cards && cards.length === 2 ? 2 : 1}>
      {cards &&
        cards.length > 0 &&
        cards.map((cardData: ICard, index: number) => (
          <StyledCard key={index}>
            <StyledCard.Body>
              <StyledCard.ListItem>
                <span>Max 10 PBB 10%:</span>
                <span>{cardData.max10PBB}</span>
              </StyledCard.ListItem>

              <StyledCard.ListItem>
                <span>Max 15 PBB 90%:</span>
                <span>{cardData.max15PBB}</span>
              </StyledCard.ListItem>

              <StyledCard.ListItem>
                <span>Överskjutande fast lön:</span>
                <span>{cardData.excessFixedSalary}</span>
              </StyledCard.ListItem>

              <StyledCard.ListItem>
                <span>Föräldralön upp till 10 PBB:</span>
                <span>{cardData.parentalSalaryUpto10PBB}</span>
              </StyledCard.ListItem>

              <StyledCard.ListItem>
                <span>Föräldralön över 10 PBB:</span>
                <span>{cardData.parentalSalaryAbove10PBB}</span>
              </StyledCard.ListItem>
            </StyledCard.Body>

            <StyledCard.Footer>
              <span>Total föräldralön/mån:</span>
              <span>{cardData.monthlyTotal} kr</span>
            </StyledCard.Footer>
          </StyledCard>
        ))}
    </Row>
  );
};
