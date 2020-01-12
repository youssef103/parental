import React from "react";
import Hint from "../hint";
import Toggle from "../toggle";

import LabelWrap from "./style";
import { ILabel, ILabelSharedProps, ILabelToggle } from "./ILabel";

export const Label: React.FC<ILabel & ILabelSharedProps & ILabelToggle> = ({
  htmlFor,
  labelText,
  labelClass,
  hintText,
  children,
  handleToggle,
  toggleName,
  toggleState = false,
  ...rest
}) => {
  return (
    <LabelWrap>
      {hintText && <Hint hintText={hintText} />}

      <label htmlFor={htmlFor} className={labelClass}>
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
