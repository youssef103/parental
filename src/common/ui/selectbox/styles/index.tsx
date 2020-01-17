import styled from "styled-components";
import Input from "./Input";
import { Label } from "../../label";

const StyledSelectBox: any = styled.div`
  width: 100%;
`;

StyledSelectBox.Label = Label;
StyledSelectBox.Input = Input;

export default StyledSelectBox;
