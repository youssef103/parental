import styled from "styled-components";
interface IProps {
  col: number;
}

const Row = styled.div<IProps>`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col}, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
`;

export default Row;
