import React, { useState } from "react";
import Slider from "react-input-slider";
import { ISalaryInfo } from "./ISalaryInfo";

import { SelectBox, TextBox } from "../../common";

import { Row } from "../../utilities/layout";
import { colors, styling } from "../../utilities/config";
import { salaryModels, hintMessages } from "../../fixtures/configData";

const BasicSalaryComponent: React.FC<ISalaryInfo> = () => {
  const [textBoxValue, setTextBoxValue] = useState("30000");
  return (
    <>
      <Row col={2}>
        <SelectBox
          name="salary-type"
          options={salaryModels}
          labelText="Lönemodell"
        />

        <TextBox
          labelText="Grundlön"
          name="baseSalary"
          value={`${textBoxValue}`}
          onChange={e => setTextBoxValue(e.target.value)}
          hintText={hintMessages.minSalary}
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
