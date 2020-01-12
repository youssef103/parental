import * as React from "react";
import { DateRangePicker } from "react-dates";
import { Label } from "../../utilities/ui/label";

export interface IDurationProps {}

interface IDurationState {
  startDate: string;
  endDate: string;
  //focusedInput: boolean;
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
          hintText="Perioden måste vara mer än 30 dagar."
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
          //phrases={{ closeDatePicker: "关闭", clearDates: "清除日期" }}
          //onClose={onClose}
          hideKeyboardShortcutsPanel={true}
          showClearDates
          reopenPickerOnClearDates
          //regular
          //block
        />
        {countOfDays && (
          <Label
            labelText={
              countOfDays <= 1
                ? countOfDays + " Dag"
                : countOfDays +
                  " Dagar" +
                  ` ( ${this.state.endDate.diff(
                    this.state.startDate,
                    "days"
                  )} dag/ar inom 2019 and ${this.state.endDate.diff(
                    this.state.startDate,
                    "days"
                  )} dag/ar inom 2020 )`
            }
          />
        )}
      </div>
    );
  }
}
