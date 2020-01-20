import styled from "styled-components";
import { mediaQuery } from "../../../../utilities/config";

const LebalWrap: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

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
