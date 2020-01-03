import styled from "styled-components";
interface IProps {
  Col: number;
}

const Row: any = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: IProps) => props.Col}, 1fr);
  grid-gap: 20px;
`;

export default Row;
