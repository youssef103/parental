import * as React from "react";
import { ILabelSharedProps, ILabelToggle } from "../label/ILabel";
import { ITextBox } from "./ITextBox";

import { Label } from "../label";
import TextBox from "./styles";
import Error from "../error/style";

type OnChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
};

const TextBoxComponent: React.FC<ILabelSharedProps &
  ITextBox &
  ILabelToggle &
  OnChangeProps> = ({
  labelText,
  labelClass,
  hintText,
  name,
  error,
  type = "text",
  ...rest
}) => (
  <TextBox>
    {labelText && (
      <Label
        htmlFor={name}
        labelText={labelText}
        labelClass={labelClass}
        hintText={hintText}
        toggleName={rest.toggleName}
        toggleState={rest.toggleState}
        handleToggle={rest.handleToggle}
      />
    )}
    <TextBox.Input id={name} name={name} {...rest} error={!!error} />
    {error && (
      <Error>
        <Error.Icon />
        <Error.Text>{error}</Error.Text>
      </Error>
    )}
  </TextBox>
);

export default TextBoxComponent;
