import React, { useState } from "react";
import TextBox from "../../utilities/ui/textbox";

interface Props {
  year?: string;
}

const BasicAmount: React.FC<Props> = ({ year }) => {
  const [textBoxValue, setTextBoxValue] = useState("30000");
  const [toggleState, setToggleState] = useState(false);

  return (
    <TextBox
      disabled={!toggleState}
      labelText={`Basbelopp för ${year}`}
      name={`basic-amount${year}`}
      value={textBoxValue}
      onChange={e => setTextBoxValue(e.target.value)}
      hintText="This is a test text"
      toggleName={`basic-amount${year}`}
      toggleState={toggleState}
      handleToggle={() => setToggleState(!toggleState)}
      error=""
    />
  );
};

export default BasicAmount;
