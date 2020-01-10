import React, { useState } from "react";
import { SelectBoxComponent } from "../../utilities/ui/selectbox/SelectBox";
import TextBoxComponent from "../../utilities/ui/textbox/TextBox";
import { Row } from "../../utilities/layout";

interface Props {}

const BasicSalaryComponent: React.FC<Props> = () => {
  const [textBoxValue, setTextBoxValue] = useState("30000");
  return (
    <Row Col="2">
      <SelectBoxComponent
        name="salary-type"
        options={[
          { value: "rörlig", text: "Rörlig" },
          { value: "stabil", text: "Stabil" }
        ]}
        label="Lönemodell"
      />

      <TextBoxComponent
        label="Grundlön"
        name="baseSalary"
        value={textBoxValue}
        onChange={e => setTextBoxValue(e.target.value)}
        hintText="This is a test text"
      />
    </Row>
  );
};

export default BasicSalaryComponent;
