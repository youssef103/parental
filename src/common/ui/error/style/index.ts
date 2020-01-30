import styled from "styled-components";
import { IError } from "../IError";

import { Icon } from "./Icon";
import { Text } from "./Text";

import { colors, styling } from "../../../../utilities";

const StyledError: any = styled.div<IError>`
  margin-top: 10px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;

  ${({ bg = false }: IError) =>
    bg &&
    `
      background: ${colors.secondary};
      border: 3px solid ${colors.primary};
      padding: 10px 5px;
      
      p {
        font-weight: bold;
        font-size: ${styling.typography.fontMedSize};
      }
    `}
`;

StyledError.Icon = Icon;
StyledError.Text = Text;

export default StyledError;
