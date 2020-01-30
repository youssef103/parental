import React, { useState } from "react";
import TextBox from "../../../common/ui/textbox";

import { IBasicAmount } from "../PriceBase.types";
import { hintMessages, priceBaseText } from "../../../utilities/config";
import { Row } from "../../../utilities/styles/layout";

export const BasicAmount: React.FC<IBasicAmount & any> = props => {
  const [toggleState1, setToggleState1] = useState(false);
  const [toggleState2, setToggleState2] = useState(false);
  const {
    years,
    pbb1,
    pbb2,
    onPBB1ChangeHandler,
    onPBB2ChangeHandler,
    errors
  } = props;

  return (
    <Row col={years.length === 2 && years[1] ? 2 : 1}>
      <TextBox
        disabled={!toggleState1}
        labelText={`${priceBaseText.basicAmountLabelText} ${years[0]}`}
        name={`basic-amount-${years[0]}`}
        value={pbb1}
        onChange={e => onPBB1ChangeHandler(e.target.value)}
        hintText={hintMessages.changePBB}
        toggleName={`basic-amount-${years[0]}`}
        toggleState={toggleState1}
        handleToggle={() => setToggleState1(!toggleState1)}
        error={errors && errors.pbb1}
      />

      {years.length === 2 && years[1] && (
        <TextBox
          disabled={!toggleState2}
          labelText={`${priceBaseText.basicAmountLabelText} ${years[1]}`}
          name={`basic-amount-${years[1]}`}
          value={pbb2}
          onChange={e => onPBB2ChangeHandler(e.target.value)}
          hintText={hintMessages.changePBB}
          toggleName={`basic-amount-${years[1]}`}
          toggleState={toggleState2}
          handleToggle={() => setToggleState2(!toggleState2)}
          error={errors && errors.pbb2}
        />
      )}
    </Row>
  );
};
