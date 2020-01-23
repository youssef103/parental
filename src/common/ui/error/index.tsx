import React from "react";
import StyledError from "./style";
import { IError } from "./IError";

const Error: React.FC<IError> = ({ error, bg, ...props }) => {
  return (
    <StyledError bg={bg}>
      <StyledError.Icon />
      <StyledError.Text>
        {error}
        {props.errors && props.errors.length > 0
          ? props.errors.map((value: string, index: number) => (
              <p key={index}>{value}</p>
            ))
          : props.children}
      </StyledError.Text>
    </StyledError>
  );
};

export default Error;
