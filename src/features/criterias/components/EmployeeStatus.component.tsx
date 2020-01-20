import React from "react";
import { SelectBox } from "../../../common/ui";

import { EmployeeStatusProps } from "../Criterias.types";
import {
  employeeStatus,
  hintMessages
} from "../../../utilities/config/messages.config";

const EmployeeStatusComponent: React.FC<EmployeeStatusProps & {
  error: string;
}> = ({ changeSalaryHandler, ...props }) => {
  return (
    <SelectBox
      name="salary-type"
      options={employeeStatus}
      labelText="Jag är en sammanhängande anställning på Dynabyte i"
      hintText={hintMessages.employeeStatus}
      onChange={changeSalaryHandler}
      error={props.error}
    />
  );
};

export default EmployeeStatusComponent;
