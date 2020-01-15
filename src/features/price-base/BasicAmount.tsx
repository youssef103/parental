import React, { useState } from "react";
import TextBox from "../../common/textbox";

import { hintMessages, errorMessages } from "../../fixtures/configData";

interface Props {
  year?: string;
}

const BasicAmount: React.FC<Props> = ({ year }) => {
  const [textBoxValue, setTextBoxValue] = useState("0");
  const [toggleState, setToggleState] = useState(false);

  return (
    <TextBox
      disabled={!toggleState}
      labelText={`Basbelopp för ${year}`}
      name={`basic-amount${year}`}
      value={textBoxValue}
      onChange={e => setTextBoxValue(e.target.value)}
      hintText={hintMessages.changePBB}
      toggleName={`basic-amount${year}`}
      toggleState={toggleState}
      handleToggle={() => setToggleState(!toggleState)}
      error={`${errorMessages.NotFoundPBB} ${year}`}
    />
  );
};

export default BasicAmount;
