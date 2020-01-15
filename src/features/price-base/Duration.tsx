import * as React from "react";
import { DateRangePicker } from "react-dates";
import { Label } from "../../common";
import { hintMessages } from "../../fixtures/configData";

export interface IDurationProps {}

interface IDurationState {
  startDate?: null | string;
  endDate?: null | string;
  focusedInput?: boolean;
  countOfDays?: number;
}

export class Duration extends React.Component<IDurationProps, any> {
  constructor(props: IDurationProps) {
    super(props);

    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      countOfDays: null
    };
  }

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
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="startDate" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="endDate" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            const countOfDays =
              endDate && startDate && endDate.diff(startDate, "days");
            this.setState({ startDate, endDate, countOfDays });
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
              countOfDays <= 1 ? countOfDays + " Dag" : countOfDays + " Dagar"
            }
          />
        )}
      </div>
    );
  }
}
