import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import { Label, Error } from "../../../common/ui";
import { DatePickerProps } from "../Criterias.types";
import { hintMessages, criteriaText } from "../../../utilities/config";

const DatePickerComponent: React.FC<DatePickerProps & any> = ({
  birthdayError,
  birthday,
  changeDateHandler
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <Label
        htmlFor="child-birthday"
        hintText={hintMessages.period}
        labelText={criteriaText.datePickerLabelText}
      />
      <SingleDatePicker
        date={birthday} // momentPropTypes.momentObj or null
        onDateChange={changeDateHandler} // PropTypes.func.isRequired
        focused={focused} // PropTypes.bool
        onFocusChange={() => setFocused(!focused)} // PropTypes.func.isRequired
        id="child-birthday" // PropTypes.string.isRequired,
        placeholder="Datum"
        displayFormat="YYYY-MM-DD"
        hideKeyboardShortcutsPanel={true}
        showDefaultInputIcon
        showClearDate
        numberOfMonths={1}
        isOutsideRange={day =>
          day.isAfter(moment()) || day.isBefore(moment().subtract(2, "years"))
        }
      />
      {birthdayError && <Error error={birthdayError} />}
    </div>
  );
};

export default DatePickerComponent;
