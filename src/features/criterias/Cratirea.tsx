import React from "react";

import EmployeeStatus from "./EmployeeStatus";
import DatePicker from "./DatePicker";

import { Row } from "../../utilities/layout";

const Criteria: React.FC = () => {
  return (
    <div>
      <Row col={2}>
        <EmployeeStatus />
        <DatePicker />
      </Row>
    </div>
  );
};

export default Criteria;
