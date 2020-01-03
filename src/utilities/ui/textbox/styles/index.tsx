import styled from "styled-components";
import Input from "./Input";
import { Label } from "../../Label/Label";

const TextBox: any = styled.div`
  width: 100%;
`;

TextBox.Label = Label;
TextBox.Input = Input;
export default TextBox;
