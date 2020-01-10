import React from "react";
import { Options } from "./Options";

import { ISelectBoxProps } from "./ISelectBox";
import { IOptoinProps } from "./IOptoinProps";
import { ILabelProps } from "../label/ILabelProps";
import SelectBox from "./styles";

export const SelectBoxComponent: React.FC<ILabelProps & ISelectBoxProps> = ({
  label,
  labelClass,
  hintText,
  name,
  options,
  ...rest
}) => (
  <SelectBox>
    {label && (
      <SelectBox.Label
        htmlFor={name}
        labelText={label}
        labelClassName={labelClass}
        hintText={hintText}
      />
    )}
    <SelectBox.DrowpDown name={name} id={name} {...rest}>
      {options.map((option: IOptoinProps) => (
        <Options key={option.value} value={option.value} text={option.text} />
      ))}
    </SelectBox.DrowpDown>
  </SelectBox>
);
