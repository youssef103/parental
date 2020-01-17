import React, { useState } from "react";
import TextBox from "../../common/textbox";

import { hintMessages, errorMessages } from "../../fixtures/configData";
import { AppState } from "../../store";
import { ThunkDispatch } from "redux-thunk";
import { setPBB } from ".";
import { connect } from "react-redux";

interface Props {
  year?: string;
}

const BasicAmount: React.FC = (props: any) => {
  const [toggleState, setToggleState] = useState(false);
  const { year, pbb, onPBBChangeHandler } = props;

  return (
    <TextBox
      disabled={!toggleState}
      labelText={`Basbelopp för ${year}`}
      name={`basic-amount${year}`}
      value={pbb}
      onChange={e => onPBBChangeHandler(e.target.value)}
      hintText={hintMessages.changePBB}
      toggleName={`basic-amount${year}`}
      toggleState={toggleState}
      handleToggle={() => setToggleState(!toggleState)}
      error={`${errorMessages.notFoundPBB} ${year}`}
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  pbb: state.priceBase.pbb
});

const mapStateToDispatch = (dispatch: ThunkDispatch<AppState, any, any>) => ({
  onPBBChangeHandler: (pbb: any) => dispatch(setPBB(pbb))
});

export default connect(mapStateToProps, mapStateToDispatch)(BasicAmount);
