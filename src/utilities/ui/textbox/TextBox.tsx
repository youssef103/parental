import * as React from "react";
import { ILabelProps } from "../label/ILabelProps";
import { ITextBoxProps } from "./ITextBox";

import { Label } from "../label/Label";
import TextBox from "./styles";
import { Error } from "../error";
import { ILabelToggle } from "../label/ILabelToggle";

type OnChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
};

const TextBoxComponent: React.FC<ILabelProps &
  ITextBoxProps &
  ILabelToggle &
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
        toggleName={rest.toggleName}
        toggleState={rest.toggleState}
        handleToggle={rest.handleToggle}
      />
    )}
    <TextBox.Input id={name} name={name} {...rest} error={!!error} />
    {error && <Error>{error}</Error>}
  </TextBox>
);

export default TextBoxComponent;
