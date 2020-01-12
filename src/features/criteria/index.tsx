import React from "react";

import { SelectBoxComponent } from "../../utilities/ui/selectbox";
import { Row } from "../../utilities/layout";
import DatePicker from "./DatePicker";

interface Props {}

const CriteriaComponent: React.FC<Props> = () => {
  return (
    <div>
      <Row col={2}>
        <SelectBoxComponent
          name="salary-type"
          options={[
            { value: "1", text: "mer än ett år" },
            { value: "2", text: "mer än tre år" }
          ]}
          labelText="Jag är en sammanhängande anställning på Dynabyte i"
          hintText={`För att ta del av Dynabytes föräldralönsersättning behöver du ha haft 
en sammanhängande anställning på Dynabyte i mer än ett år. `}
        />
        <DatePicker />
      </Row>
    </div>
  );
};

export default CriteriaComponent;
