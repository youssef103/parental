import React from "react";
import "react-dates/initialize";

import { Criteria } from "../criterias";
import { PriceBase } from "../price-base";
import BasicSalary from "../salary-info/components/SalaryInfo.component";
import { Card } from "../card";

import { localDateConfig } from "../../utilities/config";

import "react-dates/lib/css/_datepicker.css";
import { Container } from "../../utilities/styles/layout";
import GlobalStyles from "../../utilities/styles/GlobalStyle";
import { Title } from "./style";

/*  moment.locale("sv");*/
localDateConfig();

const AppComponent: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />

      <Title mt={30}>Vad behöver jag tänka på?</Title>
      <Criteria />

      <Title>Prisbasbeloppet</Title>
      <PriceBase />

      <BasicSalary />

      <Card />
    </Container>
  );
};

export default AppComponent;
