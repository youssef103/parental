import React from "react";
import Hint from "../hint/Hint";
import LabelWrap from "./style";
import { ILabel } from "./ILabel";

export const Label: React.FC<ILabel> = ({
  htmlFor,
  labelText,
  labelClassName,
  hintText,
  children,
  ...rest
}) => {
  return (
    <LabelWrap>
      {hintText && <Hint hintText={hintText} />}
      <label htmlFor={htmlFor} className={labelClassName}>
        {labelText}
        {children}
      </label>
    </LabelWrap>
  );
};
