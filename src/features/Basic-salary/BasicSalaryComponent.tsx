import React, { useState } from "react";
import { SelectBoxComponent } from "../../utilities/ui/selectbox/SelectBox";
import TextBoxComponent from "../../utilities/ui/textbox/TextBox";
import { Row } from "../../utilities/layout";
import Slider from "react-input-slider";
import config from "../../utilities/config";

interface Props {}

const BasicSalaryComponent: React.FC<Props> = () => {
  const [textBoxValue, setTextBoxValue] = useState("30000");
  return (
    <>
      <Row Col="2">
        <SelectBoxComponent
          name="salary-type"
          options={[
            { value: "rörlig", text: "Rörlig" },
            { value: "stabil", text: "Stabil" }
          ]}
          label="Lönemodell"
        />

        <TextBoxComponent
          label="Grundlön"
          name="baseSalary"
          value={textBoxValue}
          onChange={e => setTextBoxValue(e.target.value)}
          hintText="This is a test text"
          error=""
        />
      </Row>
      <Slider
        axis="x"
        xstep={50}
        xmin={0}
        xmax={100000}
        x={parseInt(textBoxValue)}
        onChange={({ x }) => setTextBoxValue(x.toString())}
        styles={{
          track: {
            width: "100%",
            backgroundColor: `${config.styling.colors.darkGray}`,
            height: 15,
            borderRadius: 10
          },
          active: {
            backgroundColor: `${config.styling.colors.primary}`,
            borderRadius: 10
          },
          thumb: {
            cursor: "pointer",
            width: 30,
            height: 30
          },
          disabled: {
            opacity: 0.5
          }
        }}
      />
    </>
  );
};

export default BasicSalaryComponent;
