import React from "react";
import StyledError from "./style";
import { IError } from "./IError";

const Error: React.FC<IError> = ({ error, bg, ...props }) => {
  return (
    <StyledError bg={bg}>
      <StyledError.Icon />
      <StyledError.Text>
        {error}
        {typeof props.errors === "object"
          ? Object.values(props.errors).map((value: any, index) => (
              <p key={index}>{value}</p>
            ))
          : props.children}
      </StyledError.Text>
    </StyledError>
  );
};

export default Error;
