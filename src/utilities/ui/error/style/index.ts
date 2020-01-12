import styled from "styled-components";
import { IError } from "../IError";

import { Icon } from "./Icon";
import { Text } from "./Text";

const StyledError: any = styled.div<IError>`
  margin-top: 10px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
`;

StyledError.Icon = Icon;
StyledError.Text = Text;

export default StyledError;
