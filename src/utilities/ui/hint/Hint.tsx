import React from "react";
import Hint from "./style/index";
import { IHintProps } from "./IHint";

const HintComponent: React.FC<IHintProps> = ({ hintText }) => {
  return (
    <Hint>
      <Hint.Icon>i</Hint.Icon>
      <Hint.Text>{hintText}</Hint.Text>
    </Hint>
  );
};

export default HintComponent;
