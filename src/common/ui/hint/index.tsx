import React from "react";
import StyledHint from "./style";
import { IHint } from "./IHint";

const Hint: React.FC<IHint> = ({ hintText, diraction = "left" }) => {
  return (
    <StyledHint>
      <StyledHint.Icon>i</StyledHint.Icon>
      <StyledHint.Text diraction={diraction}>{hintText}</StyledHint.Text>
    </StyledHint>
  );
};

export default Hint;
