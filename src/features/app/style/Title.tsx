import styled from "styled-components";

type IProps = {
  mt?: null | number;
};

export const Title = styled.h3<IProps>`
  ${({ mt = null }) => (mt ? `margin-top: ${mt}px` : "")}
`;
