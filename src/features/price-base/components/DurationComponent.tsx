import * as React from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { Label, Error } from "../../../common/ui";
import { hintMessages } from "../../../utilities/config/messages.config";

export interface IDurationProps {}

interface IDurationState {
  startDate?: null | string;
  endDate?: null | string;
  focusedInput?: boolean;
}

class Duration extends React.Component<any, any> {
  state = {
    focusedInput: null
  };

  public render() {
    const {
      birthday,
      startDate,
      endDate,
      countOfDays,
      onDatesChange,
      error
    } = this.props;

    return (
      <div>
        <Label
          htmlFor="startDate"
          labelText="Datum"
          hintText={hintMessages.minPeriod}
        />

        <DateRangePicker
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDateId="startDate" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDateId="endDate" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            onDatesChange(startDate, endDate)
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          //numberOfMonths={1}
          isOutsideRange={day =>
            day.isBefore(moment(birthday)) ||
            day.isAfter(moment(birthday).add(2, "years"))
          }
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
        {error.startDate && <Error error={error.startDate} />}
        {error.endDate && <Error error={error.endDate} />}
        {countOfDays && !error && (
          <Label
            labelText={
              countOfDays === 1 ? countOfDays + " Dag" : countOfDays + " Dagar"
            }
          />
        )}
      </div>
    );
  }
}

export default Duration;
