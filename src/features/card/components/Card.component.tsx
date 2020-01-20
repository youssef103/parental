import React from "react";

import { Spinner, Error } from "../../../common/ui";
import StyledCard from "../style";
import { ICard, IMapCardStateToProps } from "../Card.types";
import { Row } from "../../../utilities/styles/layout";
import { cardText } from "../../../utilities/config/text.config";

export const CardComponent: React.FC<IMapCardStateToProps & any> = ({
  cards,
  ...props
}) => {
  const error: boolean = false;
  const loading: boolean = false;

  if (loading) return <Spinner size={5} />;
  if (error && !loading) return <Error errors={{ t: "hghh", jj: "Test" }} bg />;

  return (
    <Row col={cards.length === 2 ? 2 : 1}>
      {cards.map((cardData: ICard, index: number) => (
        <StyledCard key={index}>
          <StyledCard.Body>
            <StyledCard.ListItem>
              <span>{cardText.max10PBB}</span>
              <span>{cardData.max10PBB}</span>
            </StyledCard.ListItem>

            <StyledCard.ListItem>
              <span>{cardText.max15PBB}</span>
              <span>{cardData.max15PBB}</span>
            </StyledCard.ListItem>

            <StyledCard.ListItem>
              <span>{cardText.excessFixedSalary}</span>
              <span>{cardData.excessFixedSalary}</span>
            </StyledCard.ListItem>

            <StyledCard.ListItem>
              <span>{cardText.parentalSalaryUpto10PBB}</span>
              <span>{cardData.parentalSalaryUpto10PBB}</span>
            </StyledCard.ListItem>

            <StyledCard.ListItem>
              <span>{cardText.parentalSalaryAbove10PBB}</span>
              <span>{cardData.parentalSalaryAbove10PBB}</span>
            </StyledCard.ListItem>
          </StyledCard.Body>

          <StyledCard.Footer>
            <span>{cardText.monthlyTotal}</span>
            <span>{cardData.monthlyTotal} kr</span>
          </StyledCard.Footer>
        </StyledCard>
      ))}
    </Row>
  );
};
