import React from "react";
import "react-dates/initialize";

import { Duration, BasicAmount } from "../price-base";
import BasicSalaryComponent from "../salary-info/BasicSalaryComponent";
import CriteriaComponent from "../criterias";
import Card from "../card/CardComponent";
import Spinner from "../../common/spinner";

import { localDateConfig } from "../../utilities/config";
import { fackData, PBB } from "../../fixtures";

import { Container, Row } from "../../utilities/layout";
import GlobalStyles from "../../utilities/style/GlobalStyle";
import "react-dates/lib/css/_datepicker.css";

/*  moment.locale("sv");*/
localDateConfig();

const ParentalCompensationApp: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />

      <h3>Vad behöver jag tänka på?</h3>
      <CriteriaComponent />
      <h3>Prisbasbeloppet</h3>
      <Row col={2}>
        <Duration />
        <Row col={2}>
          <BasicAmount year="2020" />
          <BasicAmount year="2021" />
        </Row>
      </Row>
      <BasicSalaryComponent />

      <Row col={fackData.cardData.length}>
        {/*<Spinner size={5} />*/}
        {fackData.cardData.map((data, index) => (
          <Card key={index} arrData={data} />
        ))}
      </Row>
    </Container>
  );
};

export default ParentalCompensationApp;
