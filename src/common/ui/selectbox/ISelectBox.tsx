import { IOptoinProps } from "./IOptoinProps";

export interface ISelectBoxProps {
  label?: string;
  name: string;
  options: IOptoinProps[];
  className?: string;
  error?: string;
}
