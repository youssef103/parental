import React from "react";
import Slider from "react-input-slider";

import {
  ISalaryInfo,
  IMapSalaryInfoStateToProps,
  IMapSalaryInfoStateToDispatch
} from "../SalaryInfo.types";

import { SelectBox, TextBox } from "../../../common/ui";
import { Row } from "../../../utilities/styles/layout";

import {
  colors,
  styling,
  salaryModels,
  hintMessages,
  salaryInfoText
} from "../../../utilities";

export const SalaryInfoComponent: React.FC<ISalaryInfo &
  IMapSalaryInfoStateToProps &
  IMapSalaryInfoStateToDispatch &
  any> = props => {
  const {
    errors,
    basicSalaryValue,
    basicSalaryChangeHandler,
    setSalaryModelChangeHandler
  } = props;

  return (
    <>
      <Row col={2}>
        <SelectBox
          name="salary-type"
          options={salaryModels}
          labelText={salaryInfoText.salaryModelLabelText}
          onChange={e => setSalaryModelChangeHandler(e.target.value)}
          error={errors.salaryModel}
        />

        <TextBox
          labelText={salaryInfoText.baseSalaryLabeText}
          name="baseSalary"
          value={basicSalaryValue}
          onChange={e => basicSalaryChangeHandler(e.target.value)}
          hintText={hintMessages.minSalary}
          error={errors.basicSalary}
        />
      </Row>
      <Slider
        axis="x"
        xstep={50}
        xmin={0}
        xmax={100000}
        x={parseInt(basicSalaryValue)}
        onChange={({ x }) => basicSalaryChangeHandler(x.toString())}
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
