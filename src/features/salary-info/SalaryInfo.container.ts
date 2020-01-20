import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { SalaryInfoComponent } from "./components/SalaryInfo.component";
import { AppState, AppActions } from "../../store";
import { setSalaryModel, setBasicSalary } from "./SalaryInfo.action";
import {
  IMapSalaryInfoStateToDispatch,
  IMapSalaryInfoStateToProps
} from "./SalaryInfo.types";

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

const SalaryInfo = connect(
  mapStateToProps,
  mapStateToDispatch
)(SalaryInfoComponent);

export default SalaryInfo;
