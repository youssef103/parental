import { ReactNode } from "react";

export type IError = {
  error?: string;
  errors?: {};
  children?: ReactNode;
  bg?: boolean;
};
