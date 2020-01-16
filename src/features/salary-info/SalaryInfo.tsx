import React, { useState } from "react";
import Slider from "react-input-slider";
import { ISalaryInfo } from "./ISalaryInfo";

import { SelectBox, TextBox } from "../../common";

import { Row } from "../../utilities/layout";
import { colors, styling } from "../../utilities/config";
import { salaryModels, hintMessages } from "../../fixtures/configData";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { setBasicSalary, setSalaryModel } from "./action";

const BasicSalaryComponent: React.FC<ISalaryInfo & any> = props => {
  const {
    basiceSalaryValue,
    basiceSalaryChangeHandler,
    setSalaryModelChangeHandler
  } = props;
  return (
    <>
      <Row col={2}>
        <SelectBox
          name="salary-type"
          options={salaryModels}
          labelText="Lönemodell"
          onChange={e => setSalaryModelChangeHandler(e.target.value)}
        />

        <TextBox
          labelText="Grundlön"
          name="baseSalary"
          value={basiceSalaryValue}
          onChange={e => basiceSalaryChangeHandler(e.target.value)}
          hintText={hintMessages.minSalary}
          error=""
        />
      </Row>
      <Slider
        axis="x"
        xstep={50}
        xmin={0}
        xmax={100000}
        x={parseInt(basiceSalaryValue)}
        onChange={({ x }) => basiceSalaryChangeHandler(x.toString())}
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

const mapStateToProps = (state: AppState) => ({
  basiceSalaryValue: state.salaryInfo.basicSalary,
  salaryModels: state.salaryInfo.salaryModel
});

const mapStateToDispatch = (dispatch: ThunkDispatch<AppState, any, any>) => ({
  basiceSalaryChangeHandler: (salary: string) =>
    dispatch(setBasicSalary(salary)),
  setSalaryModelChangeHandler: (salaryModel: string) =>
    dispatch(setSalaryModel(salaryModel))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(BasicSalaryComponent);
