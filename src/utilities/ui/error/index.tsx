import React from "react";
import StyledError from "./style";
import { IError } from "./IError";

const ErrorComponent: React.FC<IError> = ({ error }) => {
  return (
    <StyledError>
      <StyledError.Icon />
      <StyledError.Text>{error}</StyledError.Text>
    </StyledError>
  );
};

export default ErrorComponent;
