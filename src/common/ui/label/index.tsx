import React from "react";
import Hint from "../hint";
import Toggle from "../toggle";

import LabelWrap from "./style";
import { ILabel, ILabelSharedProps, ILabelToggle } from "./ILabel";

export const Label: React.FC<ILabel & ILabelSharedProps & ILabelToggle> = ({
  htmlFor,
  labelText,
  isCenter,
  hintText,
  children,
  handleToggle,
  toggleName,
  toggleState = false
}) => {
  return (
    <LabelWrap isCenter={isCenter}>
      {hintText && <Hint hintText={hintText} />}

      <label htmlFor={htmlFor}>
        {labelText}
        {children}
      </label>

      {toggleName && (
        <Toggle
          isOn={toggleState}
          name={toggleName}
          handleToggle={handleToggle}
        />
      )}
    </LabelWrap>
  );
};
