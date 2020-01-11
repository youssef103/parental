import React from "react";
import Hint from "../hint/Hint";
import LabelWrap from "./style";
import { ILabel } from "./ILabel";
import Toggle from "../toggle";
import { ILabelToggle } from "./ILabelToggle";

export const Label: React.FC<ILabel & ILabelToggle> = ({
  htmlFor,
  labelText,
  labelClassName,
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

      <label htmlFor={htmlFor} className={labelClassName}>
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
