import React, { useState } from "react";
import TextBox from "../../common/textbox";

import { hintMessages, errorMessages } from "../../fixtures/configData";

interface Props {
  year?: string;
}

const BasicAmount: React.FC = (props: any) => {
  const [textBoxValue, setTextBoxValue] = useState("0");
  const [toggleState, setToggleState] = useState(false);
  const { year } = props;

  return (
    <TextBox
      disabled={!toggleState}
      labelText={`Basbelopp för ${year}`}
      name={`basic-amount${year}`}
      value={textBoxValue}
      onChange={props.onPBBChange}
      hintText={hintMessages.changePBB}
      toggleName={`basic-amount${year}`}
      toggleState={toggleState}
      handleToggle={() => setToggleState(!toggleState)}
      error={`${errorMessages.notFoundPBB} ${year}`}
    />
  );
};

export default BasicAmount;
