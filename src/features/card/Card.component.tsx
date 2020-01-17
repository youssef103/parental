import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import { ICardProps } from "./ICard";

import StyledCard from "./style";
import { Spinner, Error } from "../../common/ui";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { getPBB } from "./Card.selector";

const Card: React.FC<ICardProps> = ({ arrData, ...props }) => {
  const error: boolean = false;
  const loading: boolean = false;

  if (loading) return <Spinner size={5} />;
  if (error && !loading) return <Error error={[]}></Error>;
  return (
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
};

const mapStateToProps = (state: AppState) => ({
  pbb: state.priceBase.pbb,
  pbb2: getPBB(state)
});
export default connect(mapStateToProps, null)(Card);
