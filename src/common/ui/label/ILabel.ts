export interface ILabel {
  htmlFor?: string;
}

export interface ILabelSharedProps {
  labelText?: string;
  labelClass?: string;
  hintText?: string;
}

export interface ILabelToggle {
  handleToggle?: () => void;
  toggleName?: string;
  toggleState?: boolean;
}
