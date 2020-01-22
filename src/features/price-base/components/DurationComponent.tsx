import * as React from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { Label, Error } from "../../../common/ui";
import {
  hintMessages,
  priceBaseText
} from "../../../utilities/config/text.config";
import { useState } from "react";
import { IDuration, IMapDurationStateToDispatch } from "../PriceBase.types";
import { Row } from "../../../utilities/styles/layout";

export const Duration: React.FC<IDuration &
  IMapDurationStateToDispatch &
  any> = ({
  birthday,
  startDate,
  endDate,
  countOfDays,
  onDatesChanges,
  error
}) => {
  const [focusedInput, setFocusedInput] = useState(null);
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
          onDatesChanges(startDate, endDate)
        }
        focusedInput={focusedInput}
        onFocusChange={(focusInput: any) => setFocusedInput(focusInput)}
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
      <Row col={2} reqCol>
        {error && error.startDate && <Error error={error.startDate} />}
        {error && error.endDate && <Error error={error.endDate} />}
      </Row>
      {countOfDays && (
        <Label
          labelText={
            countOfDays === 1 ? countOfDays + " Dag" : countOfDays + " Dagar"
          }
        />
      )}
    </div>
  );
};
