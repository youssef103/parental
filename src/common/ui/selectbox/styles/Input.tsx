import styled from "styled-components";
import { styling, colors } from "../../../../utilities/config";

const Input = styled.select`
  height: 60px;
  width: 100%;
  font-size: 1em;
  text-align-last: center;
  color: #000000;
  border: 1px solid #eeeeee;
  margin-bottom: 10px;
  font-weight: 400;
  padding-left: 25px;
  box-shadow: ${styling.borderShadow()};
  background: ${colors.white};
  outline-color: ${colors.primary};
`;

export default Input;
