import styled from "styled-components";
import config from "../../../config";

const Input = styled.input`
  height: 60px;
  width: 100%;
  text-align: center;
  border: 1px solid #eeeeee;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  outline-color: ${config.styling.colors.primary};
`;

export default Input;
