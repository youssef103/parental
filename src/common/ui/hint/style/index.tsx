import styled from "styled-components";

import { HintText } from "./HintText";
import { HintIcon } from "./HintIcon";

import { IHint } from "../IHint";

const StyledHint: any = styled.div<IHint>`
  position: relative;
  width: 30px;
`;

StyledHint.Icon = HintIcon;
StyledHint.Text = HintText;

export default StyledHint;
