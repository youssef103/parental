import styled from "styled-components";
import { HintIcon, HintText } from "./hint";

const Hint: any = styled.div`
  position: relative;
  width: 50px;
`;

Hint.Icon = HintIcon;
Hint.Text = HintText;

export default Hint;
