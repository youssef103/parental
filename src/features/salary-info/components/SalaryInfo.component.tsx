import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import Slider from "react-input-slider";

import { AppState, AppActions } from "../../../store";
import { setBasicSalary, setSalaryModel } from "../SalaryInfo.action";
import {
  ISalaryInfo,
  IMapSalaryInfoStateToProps,
  IMapSalaryInfoStateToDispatch
} from "../SalaryInfo.types";

import { SelectBox, TextBox } from "../../../common/ui";
import { Row } from "../../../utilities/styles/layout";

import { colors, styling } from "../../../utilities/config";
import {
  salaryModels,
  hintMessages,
  salaryInfoText
} from "../../../utilities/config/text.config";

const BasicSalaryComponent: React.FC<ISalaryInfo &
  IMapSalaryInfoStateToProps &
  IMapSalaryInfoStateToDispatch &
  any> = props => {
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
          labelText={salaryInfoText.salaryModelLabelText}
          onChange={e => setSalaryModelChangeHandler(e.target.value)}
        />

        <TextBox
          labelText={salaryInfoText.baseSalaryLabeText}
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

const mapStateToProps = (state: AppState): IMapSalaryInfoStateToProps => ({
  basiceSalaryValue: state.salaryInfo.basicSalary,
  salaryModels: state.salaryInfo.salaryModel
});

const mapStateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, AppActions>
): IMapSalaryInfoStateToDispatch => ({
  basiceSalaryChangeHandler: salary => dispatch(setBasicSalary(salary)),
  setSalaryModelChangeHandler: salaryModel =>
    dispatch(setSalaryModel(salaryModel))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(BasicSalaryComponent);
