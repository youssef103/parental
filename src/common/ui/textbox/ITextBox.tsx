import React from "react";
export interface ITextBox {
  name: string;
  value: string;
  type?: string;
  className?: string;
  hintText?: string;
  error?: string;
}
