import React from "react";
import StyledToggle from "./style";
import { IToggle } from "./IToggle";

const Toggle: React.FC<IToggle> = ({ name, isOn, handleToggle }) => {
  return (
    <StyledToggle isOn={isOn}>
      <StyledToggle.CheckBox
        checked={isOn}
        onChange={handleToggle}
        id={name}
        name={name}
      />

      <StyledToggle.Label htmlFor={name}>
        <StyledToggle.Button />
      </StyledToggle.Label>
    </StyledToggle>
  );
};

export default Toggle;
