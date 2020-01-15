import React from "react";
import { SelectBox } from "../../common";

import { employeeStatus, hintMessages } from "../../fixtures/configData";

interface Props {}

const EmployeeStatus: React.FC<Props> = () => {
  return (
    <SelectBox
      name="salary-type"
      options={employeeStatus}
      labelText="Jag är en sammanhängande anställning på Dynabyte i"
      hintText={hintMessages.employeeStatus}
    />
  );
};

export default EmployeeStatus;
