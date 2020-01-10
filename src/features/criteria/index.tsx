import React from "react";

import { SelectBoxComponent } from "../../utilities/ui/selectbox/SelectBox";
import { Row } from "../../utilities/layout";
import DatePicker from "./DatePicker";

interface Props {}

const CriteriaComponent: React.FC<Props> = () => {
  return (
    <div>
      <h2>Vad behöver jag tänka på?</h2>
      <Row Col={2}>
        <SelectBoxComponent
          name="salary-type"
          options={[
            { value: "1", text: "mer än ett år" },
            { value: "2", text: "mer än tre år" }
          ]}
          label="Jag är en sammanhängande anställning på Dynabyte i"
          hintText="jkjkjk"
        />
        <DatePicker />
      </Row>
    </div>
  );
};

export default CriteriaComponent;
