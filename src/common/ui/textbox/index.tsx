import * as React from "react";
import { ILabelSharedProps, ILabelToggle } from "../label/ILabel";
import { ITextBox } from "./ITextBox";

import { Label } from "../label";
import StyledTextBox from "./styles";
import Error from "../error/style";

type OnChangeProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
};

const TextBox: React.FC<ILabelSharedProps &
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
  <StyledTextBox>
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
    <StyledTextBox.Input id={name} name={name} {...rest} error={!!error} />
    {error && (
      <Error>
        <Error.Icon />
        <Error.Text>{error}</Error.Text>
      </Error>
    )}
  </StyledTextBox>
);

export default TextBox;
