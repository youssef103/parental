import styled from "styled-components";
import config from "../../../config";

const Input = styled.input`
  height: 60px;
  width: 100%;
  text-align: center;
  border: 1px solid
    ${(props: any) => (props.error ? config.styling.colors.danger : "#eeeeee")};
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  outline-color: ${config.styling.colors.primary};

  &:disabled {
    background: ${config.styling.colors.lightGray};
    color: ${config.styling.colors.darkGray};
    cursor: not-allowed;
  }
`;

export default Input;
