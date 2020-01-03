import styled from "styled-components";
import DrowpDown from "./DropDown";
import { Label } from "../../Label/Label";

const SelectBox: any = styled.div`
  width: 100%;
`;

SelectBox.Label = Label;
SelectBox.DrowpDown = DrowpDown;

export default SelectBox;
