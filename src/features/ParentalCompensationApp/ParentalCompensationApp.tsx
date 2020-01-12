import React from "react";
import "react-dates/initialize";

import { localDateConfig } from "../../utilities/config";

import GlobalStyles from "../../utilities/style/GlobalStyle";
import { Container, Row } from "../../utilities/layout";

import Card from "../card/CardComponent";
import BasicSalaryComponent from "../Basic-salary/BasicSalaryComponent";
import { Duration } from "../duration/DurationComponent";

import { fackData } from "../../fixtures/fackData";
import CriteriaComponent from "../criteria";
import "react-dates/lib/css/_datepicker.css";
import BasicAmount from "../basic-amount/BasicAmount";
import Spinner from "../../utilities/ui/spinner";

/*  moment.locale("sv");*/
localDateConfig();

interface Props {}

const ParentalCompensationApp: React.FC<Props> = () => {
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
        <Spinner size={5} />
        {fackData.cardData.map((data, index) => (
          <Card key={index} arrData={data} />
        ))}
      </Row>
    </Container>
  );
};

export default ParentalCompensationApp;
