import React, { useState } from "react";
import TextBox from "../../../common/ui/textbox";

import { IBasicAmount } from "../PriceBase.types";
import { hintMessages, priceBaseText } from "../../../utilities/config";

export const BasicAmount: React.FC<IBasicAmount> = props => {
  const [toggleState, setToggleState] = useState(false);
  const { year, value, onChange, error } = props;

  return (
    <TextBox
      disabled={!toggleState}
      labelText={`${priceBaseText.basicAmountLabelText} ${year}`}
      name={`basic-amount-${year}`}
      value={value}
      onChange={e => onChange(e.target.value)}
      hintText={hintMessages.changePBB}
      toggleName={`basic-amount-${year}`}
      toggleState={toggleState}
      handleToggle={() => setToggleState(!toggleState)}
      error={error && error}
    />
  );
};
