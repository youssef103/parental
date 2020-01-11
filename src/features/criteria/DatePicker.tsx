import React, { useState } from "react";

import { SingleDatePicker } from "react-dates";
import { Label } from "../../utilities/ui/label/Label";

interface Props {}

const DatePicker: React.FC<Props> = () => {
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState();

  return (
    <div>
      <Label
        htmlFor="child-birthday"
        hintText="kkkjkk"
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
        isOutsideRange={() => false}
        showDefaultInputIcon
        showClearDate
      />
    </div>
  );
};

export default DatePicker;
