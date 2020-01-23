import { ReactNode } from "react";

export type IError = {
  error?: string;
  errors?: string[];
  children?: ReactNode;
  bg?: boolean;
};
