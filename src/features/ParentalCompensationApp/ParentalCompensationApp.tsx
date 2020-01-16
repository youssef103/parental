import React from "react";
import "react-dates/initialize";

import { PriceBase } from "../price-base";
import BasicSalary from "../salary-info/SalaryInfo";
import { Criteria } from "../criterias";
import { Card } from "../card";

import { localDateConfig } from "../../utilities/config";
import { fackData } from "../../fixtures";

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
      <Criteria />

      <h3>Prisbasbeloppet</h3>
      <PriceBase />

      <BasicSalary />

      <Row col={fackData.cardData.length}>
        {fackData.cardData.map((data, index) => (
          <Card key={index} arrData={data} />
        ))}
      </Row>
    </Container>
  );
};

export default ParentalCompensationApp;
