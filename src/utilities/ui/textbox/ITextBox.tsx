import React from "react";
export interface ITextBoxProps {
  name: string;
  value: string;
  type?: string;
  className?: string;
  hintText?: string;
  error?: string;
}
