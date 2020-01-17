import React from "react";
import { IOptoinProps } from "./IOptoinProps";

export const Options: React.FC<IOptoinProps> = ({ value, text }) => {
  return <option value={value}>{text}</option>;
};
