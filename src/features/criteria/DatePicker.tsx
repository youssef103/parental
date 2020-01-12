import React, { useState } from "react";

import { SingleDatePicker } from "react-dates";
import { Label } from "../../utilities/ui/label";
import Error from "../../utilities/ui/error";
import moment from "moment";

interface Props {}

const DatePicker: React.FC<Props> = () => {
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState();

  return (
    <div>
      <Label
        htmlFor="child-birthday"
        hintText="Din föräldraledighet måste tas ut inom 24 månader efter barnets födelse
        eller adoption."
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
        isOutsideRange={day =>
          day.isAfter(moment()) || day.isBefore(moment().subtract(2, "years"))
        }
      />
      <Error
        error="Din föräldraledighet måste tas ut inom 24 månader efter barnets födelse
        eller adoption"
      />
    </div>
  );
};

export default DatePicker;
