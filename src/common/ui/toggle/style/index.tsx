import styled from "styled-components";
import { ToggleButton } from "./Button";
import { CheckBox } from "./CheckBox";
import { ToggleLabel } from "./Label";

const StyledToggle: any = styled.div``;

StyledToggle.CheckBox = CheckBox;
StyledToggle.Button = ToggleButton;
StyledToggle.Label = ToggleLabel;

export default StyledToggle;
