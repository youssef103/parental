import * as React from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { Label, Error } from "../../../common/ui";
import {
  hintMessages,
  priceBaseText
} from "../../../utilities/config/text.config";

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
          labelText={priceBaseText.durationLabelText}
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
          startDatePlaceholderText={priceBaseText.durationStartBatePlaceholder}
          endDatePlaceholderText={priceBaseText.durationEndBatePlaceholder}
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
        {countOfDays && (
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
