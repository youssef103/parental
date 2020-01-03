import * as React from "react";
import { ILabelProps } from "../Label/ILabelProps";
import { ITextBoxProps } from "./ITextBox";

import { Label } from "../Label/Label";
import TextBox from "./styles";

type OnChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const TextBoxComponent: React.FC<
  ILabelProps & ITextBoxProps & OnChangeProps
> = ({ label, labelClass, name, error, type = "text", ...rest }) => (
  <TextBox>
    {label && (
      <Label htmlFor={name} labelText={label} labelClassName={labelClass} />
    )}
    <TextBox.Input id={name} name={name} {...rest} />
    {error && <div className="alert alert-danger">{error}</div>}
  </TextBox>
);

export default TextBoxComponent;
