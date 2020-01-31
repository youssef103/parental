import styled from "styled-components";
import { mediaQuery } from "../../../../utilities";
import { ILabelSharedProps } from "../ILabel";

const LebalWrap: any = styled.div<ILabelSharedProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  ${({ isCenter }) => (isCenter ? "text-align:center" : "")}

  ${mediaQuery.minSizeLaptopAndUp} {
    min-height: 25px;
  }

  ${mediaQuery.maxSizeTablet} {
    min-height: 35px;
  }

  label {
    flex: 1;
  }
`;

export default LebalWrap;
