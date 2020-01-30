import styled from "styled-components";

import { IHint } from "../IHint";
import { colors, mediaQuery } from "../../../../utilities";

export const HintText = styled.p<IHint>`
  position: absolute;
  top: 26px;
  font-size: 14px;
  padding: 15px 10px;
  z-index: 10;
  display: none;
  border: 2px solid ${colors.primary};
  background: ${colors.secondary};
  color: ${colors.white};

  ${mediaQuery.minSizeLaptopAndUp} {
    min-width: 36vw;
    max-width: 48vw;
  }

  ${mediaQuery.maxSizeTablet} {
    min-width: 44vw;
    max-width: 48vw;
  }

  ${mediaQuery.maxSizePhone} {
    min-width: 87vw;
    max-width: 95vw;
  }

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid ${colors.primary};
    position: absolute;
    top: -10px;
    left: 5px;
  }
`;
