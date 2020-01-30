import styled from "styled-components";
import { ITextBox } from "../ITextBox";
import { colors } from "../../../../utilities";

const Input = styled.input<ITextBox>`
  height: 60px;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ error }) => (error ? colors.danger : "#eeeeee")};
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  outline-color: ${colors.primary};

  &:disabled {
    background: ${colors.lightGray};
    color: ${colors.darkGray};
    cursor: not-allowed;
  }
`;

export default Input;
