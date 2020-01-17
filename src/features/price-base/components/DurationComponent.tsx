import * as React from "react";
import { DateRangePicker } from "react-dates";
import { Label } from "../../../common/ui";
import { hintMessages } from "../../../constants/configData";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../store";
import { setDuration } from "../PriceBase.action";

export interface IDurationProps {}

interface IDurationState {
  startDate?: null | string;
  endDate?: null | string;
  focusedInput?: boolean;
}

class Duration extends React.Component<any, any> {
  state = {
    focusedInput: null,
    countOfDays: undefined
  };

  public render() {
    const { countOfDays } = this.state;
    return (
      <div>
        <Label
          htmlFor="startDate"
          labelText="Datum"
          hintText={hintMessages.minPeriod}
        />

        <DateRangePicker
          startDate={this.props.startDate} // momentPropTypes.momentObj or null,
          startDateId="startDate" // PropTypes.string.isRequired,
          endDate={this.props.endDate} // momentPropTypes.momentObj or null,
          endDateId="endDate" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            this.props.onDatesChange(startDate, endDate);
            /* this.props.endDate &&
              this.props.startDate &&
              this.setState({ countOfDays: endDate.diff(startDate, "days") });*/
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          //numberOfMonths={1}
          isOutsideRange={() => false}
          showDefaultInputIcon
          displayFormat="YYYY-MM-DD"
          startDatePlaceholderText="Start Datum"
          endDatePlaceholderText="Slut Datum"
          //onClose={onClose}
          hideKeyboardShortcutsPanel={true}
          showClearDates
          reopenPickerOnClearDates
          numberOfMonths={window.innerWidth >= 768 ? 2 : 1}
          //regular
          //block
        />
        {countOfDays && (
          <Label
            labelText={
              ""
              /*countOfDays <= 1 ? countOfDays + " Dag" : countOfDays + " Dagar"*/
            }
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  startDate: state.priceBase.duration.startDate,
  endDate: state.priceBase.duration.endDate
});

const mapStateToDispatch = (dispatch: ThunkDispatch<AppState, any, any>) => ({
  onDatesChange: (strD: any, endD: any, couOfDays: any) => {
    dispatch(setDuration(strD, endD, couOfDays));
  }
});

export default connect(mapStateToProps, mapStateToDispatch)(Duration);
