import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState, AppActions } from "../../store";
import { setBasicSalary, setSalaryModel } from ".";
import SalaryInfoComponent from "./components/SalaryInfo.component";

const mapStateToProps = (state: AppState) => ({
  basiceSalaryValue: state.salaryInfo.basicSalary,
  salaryModels: state.salaryInfo.salaryModel
});

const mapStateToDispatch = (
  dispatch: ThunkDispatch<AppState, any, AppActions>
) => ({
  basiceSalaryChangeHandler: (salary: number) =>
    dispatch(setBasicSalary(salary)),
  setSalaryModelChangeHandler: (salaryModel: string) =>
    dispatch(setSalaryModel(salaryModel))
});

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SalaryInfoComponent);
