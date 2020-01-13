import React, { useState } from "react";
import { SelectBoxComponent } from "../../common/selectbox";
import TextBoxComponent from "../../common/textbox";
import { Row } from "../../utilities/layout";
import Slider from "react-input-slider";
import { colors, styling } from "../../utilities/config";

interface Props {}

const BasicSalaryComponent: React.FC<Props> = () => {
  const [textBoxValue, setTextBoxValue] = useState("30000");
  return (
    <>
      <Row col={2}>
        <SelectBoxComponent
          name="salary-type"
          options={[
            { value: "rörlig", text: "Rörlig" },
            { value: "stabil", text: "Stabil" }
          ]}
          labelText="Lönemodell"
        />

        <TextBoxComponent
          labelText="Grundlön"
          name="baseSalary"
          value={`${textBoxValue} kr`}
          onChange={e => setTextBoxValue(e.target.value)}
          hintText=""
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
            backgroundColor: `${colors.darkGray}`,
            height: 15,
            borderRadius: 10,
            boxShadow: `${styling.borderShadow(0.15, "inset")}`
          },
          active: {
            backgroundColor: `${colors.primary}`,
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
