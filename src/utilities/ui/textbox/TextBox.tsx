import * as React from "react";
import { ILabelProps } from "../label/ILabelProps";
import { ITextBoxProps } from "./ITextBox";

import { Label } from "../label/Label";
import TextBox from "./styles";

type OnChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
};

const TextBoxComponent: React.FC<ILabelProps &
  ITextBoxProps &
  OnChangeProps> = ({
  label,
  labelClass,
  hintText,
  name,
  error,
  type = "text",
  ...rest
}) => (
  <TextBox>
    {label && (
      <Label
        htmlFor={name}
        labelText={label}
        labelClassName={labelClass}
        hintText={hintText}
      />
    )}
    <TextBox.Input id={name} name={name} {...rest} />
    {error && <div className="alert alert-danger">{error}</div>}
  </TextBox>
);

export default TextBoxComponent;
