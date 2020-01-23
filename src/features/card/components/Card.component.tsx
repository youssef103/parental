import React from "react";

import { ICard, ICardProps } from "../Card.types";

import { Spinner, Error } from "../../../common/ui";
import { Row } from "../../../utilities/styles/layout";
import StyledCard from "../style";

import { cardText } from "../../../utilities/config";
import { Title } from "../../app/style";

export const CardComponent: React.FC<ICardProps & any> = ({
  cards,
  errors,
  loaded,
  compensationPeriod
}) => {
  if (!loaded) return <Spinner size={5} />;
  if (errors.length > 0 && loaded) return <Error errors={errors} bg />;

  return (
    <Row col={cards && cards.length === 2 ? 2 : 1}>
      {compensationPeriod && <Title>{compensationPeriod}</Title>}
      {cards &&
        cards.map((cardData: ICard, index: number) => (
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
              <span>{cardText.total}</span>
              <span>{cardData.total} kr</span>
            </StyledCard.Footer>
          </StyledCard>
        ))}
    </Row>
  );
};
