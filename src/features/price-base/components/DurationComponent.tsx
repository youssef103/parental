import React, { useState } from "react";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { IDuration, IMapDurationStateToDispatch } from "../PriceBase.types";

import { Row } from "../../../utilities/styles/layout";
import { Label, Error } from "../../../common/ui";

import { hintMessages, priceBaseText } from "../../../utilities/config";

export const Duration: React.FC<IDuration &
  IMapDurationStateToDispatch &
  any> = ({
  birthday,
  startDate,
  endDate,
  countOfDays,
  onDatesChanges,
  errors
}) => {
  const [focusedInput, setFocusedInput] = useState<
    "startDate" | "endDate" | null
  >(null);

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
        onFocusChange={focusInput => setFocusedInput(focusInput)}
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
      <Row col={2} reqCol={errors.startDate !== "" && errors.endDate !== ""}>
        {errors && errors.startDate && <Error error={errors.startDate} />}
        {errors && errors.endDate && <Error error={errors.endDate} />}
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
