import styled from "styled-components";
import { mediaQuery } from "../config";

const Container = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 40px;
  width: 80vw;

  ${mediaQuery.smallSize} {
    width: 94vw;
  }
  ${mediaQuery.mediumSize} {
    width: 96vw;
  }

  margin-right: auto;
  margin-left: auto;
`;

export default Container;
