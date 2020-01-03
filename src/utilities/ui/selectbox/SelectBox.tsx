import React from "react";
import { Options } from "./Options";

import { ISelectBoxProps } from "./ISelectBox";
import { IOptoinProps } from "./IOptoinProps";
import { ILabelProps } from "../Label/ILabelProps";
import SelectBox from "./styles";

export const SelectBoxComponent: React.FC<ILabelProps & ISelectBoxProps> = ({
  label,
  labelClass,
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
      />
    )}
    <SelectBox.DrowpDown name={name} id={name} {...rest}>
      {options.map((option: IOptoinProps) => (
        <Options key={option.value} value={option.value} text={option.text} />
      ))}
    </SelectBox.DrowpDown>
  </SelectBox>
);
