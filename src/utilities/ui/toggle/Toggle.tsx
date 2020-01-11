import React from "react";
import Switch from "./style/Toggle";
import { IToggle } from "./IToggle";

const Toggle: React.FC<IToggle> = ({ name, isOn, handleToggle }) => {
  return (
    <Switch isOn={isOn}>
      <Switch.CheckBox
        checked={isOn}
        onChange={handleToggle}
        id={name}
        name={name}
      />

      <Switch.ToggleLabel htmlFor={name}>
        <Switch.ToggleBtn />
      </Switch.ToggleLabel>
    </Switch>
  );
};

export default Toggle;
