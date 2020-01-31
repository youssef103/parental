import React from "react";
import { Options } from "./Options";

import { ISelectBoxProps } from "./ISelectBox";
import { IOptoinProps } from "./IOptoinProps";
import { ILabelSharedProps } from "../label/ILabel";
import StyledSelectBox from "./styles";
import Error from "../error";

type c = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SelectBox: React.FC<ILabelSharedProps & ISelectBoxProps & c> = ({
  labelText,
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
        hintText={hintText}
      />
    )}
    <StyledSelectBox.Input name={name} id={name} {...rest}>
      {options.map((option: IOptoinProps) => (
        <Options key={option.value} value={option.value} text={option.text} />
      ))}
    </StyledSelectBox.Input>

    {rest.error && <Error error={rest.error} />}
  </StyledSelectBox>
);
