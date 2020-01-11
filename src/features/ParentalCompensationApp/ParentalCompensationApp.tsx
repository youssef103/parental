import React from "react";
import "react-dates/initialize";

import config from "../../utilities/config";

import GlobalStyles from "../../utilities/style/GlobalStyle";
import { Container, Row } from "../../utilities/layout";

import Card from "../card/CardComponent";
import BasicSalaryComponent from "../Basic-salary/BasicSalaryComponent";
import { Duration } from "../duration/DurationComponent";

import { fackData } from "../../fixtures/fackData";
import CriteriaComponent from "../criteria";
import "react-dates/lib/css/_datepicker.css";
import BasicAmount from "../basic-amount/BasicAmount";

/*  moment.locale("sv");*/
config.localConfig();

interface Props {}

const ParentalCompensationApp: React.FC<Props> = () => {
  return (
    <Container>
      <GlobalStyles />

      <CriteriaComponent />
      <Row Col={2}>
        <Duration />
        <Row Col={2}>
          <BasicAmount year="2020" />
          <BasicAmount year="2021" />
        </Row>
      </Row>
      <BasicSalaryComponent />

      <Row Col={fackData.cardData.length}>
        {fackData.cardData.map((data, index) => (
          <Card key={index} arrData={data} />
        ))}
      </Row>
    </Container>
  );
};

export default ParentalCompensationApp;
