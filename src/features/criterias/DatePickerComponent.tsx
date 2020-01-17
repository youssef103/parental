import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import { Label, Error } from "../../common";
import { hintMessages } from "../../fixtures/configData";

const DatePicker: React.FC<any> = props => {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <Label
        htmlFor="child-birthday"
        hintText={hintMessages.period}
        labelText="Födelse av ditt barn"
      />
      <SingleDatePicker
        date={props.birthday} // momentPropTypes.momentObj or null
        onDateChange={props.changeDateHandler} // PropTypes.func.isRequired
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
      {props.error && <Error error={props.error} />}
    </div>
  );
};

export default DatePicker;
