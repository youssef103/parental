import styled from "styled-components";

type IProps = {
  mt?: null | number;
  md?: null | number;
  color?: null | string;
};

export const Title = styled.h3<IProps>`
  ${({ mt = null }) => (mt ? `margin-top: ${mt}px` : "")}
  ${({ md = null }) => (md ? `margin-down: ${md}px` : "")}
  ${({ color = null }) => (color ? `color: ${color}` : "")}
`;
