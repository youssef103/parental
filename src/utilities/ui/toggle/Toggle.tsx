import React from "react";
import { Toggle2 as Switch } from "./style/Toggle";
import { Label } from "../label/Label";
import { ILabelProps } from "../label/ILabelProps";

interface Props {
  isOn: boolean;
  handleToggle: () => void;
  name: string;
  error?: string;
}

const Toggle: React.FC<ILabelProps & Props> = ({
  label,
  labelClass,
  name,
  error,
  isOn,
  handleToggle,
  ...rest
}) => {
  return (
    <Switch isOn={isOn} error="hhgh">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={name}
        name={name}
        type="checkbox"
      />

      <Label
        htmlFor={name}
        labelText={label}
        labelClassName={`react-switch-label ${labelClass}`}
      >
        <span className={`react-switch-button`} />
      </Label>

      {error && <div className="alert alert-danger">{error}</div>}
    </Switch>
  );
};

export default Toggle;
