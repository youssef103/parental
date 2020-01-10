import * as React from "react";
import { DateRangePicker } from "react-dates";

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
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
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
          <p>
            {countOfDays <= 1 ? countOfDays + " Dag" : countOfDays + " Dagar"}
          </p>
        )}
      </div>
    );
  }
}
