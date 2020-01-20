import React from "react";
import { SelectBox } from "../../../common/ui";

import { EmployeeStatusProps } from "../Criterias.types";
import {
  employeeStatus,
  hintMessages,
  criteriaText
} from "../../../utilities/config/text.config";

const EmployeeStatusComponent: React.FC<EmployeeStatusProps & {
  error: string;
}> = ({ changeSalaryHandler, ...props }) => {
  return (
    <SelectBox
      name="salary-type"
      options={employeeStatus}
      labelText={criteriaText.employeeStatusLabelText}
      hintText={hintMessages.employeeStatus}
      onChange={changeSalaryHandler}
      error={props.error}
    />
  );
};

export default EmployeeStatusComponent;
