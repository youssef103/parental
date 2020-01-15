import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import { Label, Error } from "../../common";
import { hintMessages, errorMessages } from "../../fixtures/configData";

const DatePicker: React.FC = () => {
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState();

  return (
    <div>
      <Label
        htmlFor="child-birthday"
        hintText={hintMessages.period}
        labelText="Födelse av ditt barn"
      />
      <SingleDatePicker
        date={date} // momentPropTypes.momentObj or null
        onDateChange={date => setDate(date)} // PropTypes.func.isRequired
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
      <Error error={errorMessages.period} />
    </div>
  );
};

export default DatePicker;
