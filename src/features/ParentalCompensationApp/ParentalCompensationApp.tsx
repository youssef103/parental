import React, { Component } from "react";
import TextBoxComponent from "../../utilities/ui/textbox/TextBox";
import { IOptoinProps } from "../../utilities/ui/selectbox/IOptoinProps";
import { SelectBoxComponent } from "../../utilities/ui/selectbox/SelectBox";

import GlobalStyles from "../../utilities/style/GlobalStyle";
import { Container, Row } from "../../utilities/layout";
import Card from "../card/CardComponent";

import { fackData } from "../../fixtures/fackData";

interface IState {
  baseSalary: string;
  data: IOptoinProps[];
}

class ParentalCompensationApp extends Component<any, any> {
  state = {
    baseSalary: "",
    data: [
      { value: "1", text: "one" },
      { value: "2", text: "two" },
      { value: "3", text: "three" }
    ]
  };
  handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    this.setState((prev: IState) => ({ [name]: value }));
  };
  render() {
    return (
      <Container>
        <GlobalStyles />
        <Row Col={2}>
          <TextBoxComponent
            label="Grundlön"
            name="baseSalary"
            value={this.state.baseSalary}
            onChange={this.handelChange}
          />

          <SelectBoxComponent
            name="test"
            options={this.state.data}
            label="Test"
          />
        </Row>
        <Row Col={fackData.cardData.length}>
          {fackData.cardData.map((data, index) => (
            <Card key={index} arrData={data} />
          ))}

          <button
            onClick={() => {
              throw new Error("Test .env");
            }}
          >
            Break the world
          </button>
        </Row>
      </Container>
    );
  }
}

export default ParentalCompensationApp;
