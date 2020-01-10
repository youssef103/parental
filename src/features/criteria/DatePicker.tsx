import React, { useState } from "react";

import { SingleDatePicker } from "react-dates";

interface Props {}

const DatePicker: React.FC<Props> = () => {
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState();

  return (
    <div>
      <p>Födelse av ditt barn</p>
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
      />
    </div>
  );
};

export default DatePicker;
