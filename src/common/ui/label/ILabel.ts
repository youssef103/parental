export interface ILabel {
  htmlFor?: string;
}

export interface ILabelSharedProps {
  labelText?: string;
  isCenter?: boolean;
  hintText?: string;
}

export interface ILabelToggle {
  handleToggle?: () => void;
  toggleName?: string;
  toggleState?: boolean;
}
