import React from "react";
import StyledHint from "./style";
import { IHint } from "./IHint";

const Hint: React.FC<IHint> = ({ hintText }) => {
  return (
    <StyledHint>
      <StyledHint.Icon>i</StyledHint.Icon>
      <StyledHint.Text>{hintText}</StyledHint.Text>
    </StyledHint>
  );
};

export default Hint;
