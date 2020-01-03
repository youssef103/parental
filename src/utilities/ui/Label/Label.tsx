import React from "react";
import { ILabel } from "./ILabel";

export const Label: React.FC<ILabel> = ({
  htmlFor,
  labelText,
  labelClassName
}) => {
  return (
    <label htmlFor={htmlFor} className={labelClassName}>
      {labelText}
    </label>
  );
};
