import React from "react";
import { Options } from "./Options";

import { ISelectBoxProps } from "./ISelectBox";
import { IOptoinProps } from "./IOptoinProps";
import { ILabelSharedProps } from "../label/ILabel";
import StyledSelectBox from "./styles";

export const SelectBoxComponent: React.FC<ILabelSharedProps &
  ISelectBoxProps> = ({
  labelText,
  labelClass,
  hintText,
  name,
  options,
  ...rest
}) => (
  <StyledSelectBox>
    {labelText && (
      <StyledSelectBox.Label
        htmlFor={name}
        labelText={labelText}
        labelClassName={labelClass}
        hintText={hintText}
      />
    )}
    <StyledSelectBox.Input name={name} id={name} {...rest}>
      {options.map((option: IOptoinProps) => (
        <Options key={option.value} value={option.value} text={option.text} />
      ))}
    </StyledSelectBox.Input>
  </StyledSelectBox>
);
