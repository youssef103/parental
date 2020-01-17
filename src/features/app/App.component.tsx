import React from "react";
import "react-dates/initialize";

import { PriceBase } from "../price-base";
import BasicSalary from "../salary-info/SalaryInfo.component";
import { Criteria } from "../criterias";
import { Card } from "../card";

import { localDateConfig } from "../../utilities/config";
import { fackData } from "../../constants";

import { Container, Row } from "../../utilities/layout";
import GlobalStyles from "../../utilities/style/GlobalStyle";
import "react-dates/lib/css/_datepicker.css";

/*  moment.locale("sv");*/
localDateConfig();

const AppComponent: React.FC = () => {
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

export default AppComponent;
