import React from "react";
import "react-dates/initialize";

import { Criteria } from "../criterias";
import { PriceBase } from "../price-base";
import { SalaryInfo } from "../salary-info";
import { Card } from "../card";

import { localDateConfig } from "../../utilities/config";

import "react-dates/lib/css/_datepicker.css";
import { Container, Row } from "../../utilities/styles/layout";
import GlobalStyles from "../../utilities/styles/GlobalStyle";
import { Title } from "./style";

/*  moment.locale("sv");*/
localDateConfig();

const AppComponent: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />

      <Title mt={30}>Vad behöver jag tänka på?</Title>
      <Row col={2}>
        <Criteria.EmployeeStatus />
        <Criteria.Birthday />
      </Row>

      <Title>Prisbasbeloppet</Title>
      <Row col={2}>
        <PriceBase.Duration />
        <PriceBase.BasicAmount />
      </Row>

      <SalaryInfo />

      <Card />
    </Container>
  );
};

export default AppComponent;
