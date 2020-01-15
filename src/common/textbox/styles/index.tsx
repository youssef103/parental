import styled from "styled-components";
import Input from "./Input";
import { Label } from "../../label";

const StyledTextBox: any = styled.div`
  width: 100%;
`;

StyledTextBox.Label = Label;
StyledTextBox.Input = Input;
export default StyledTextBox;
