import styled from "styled-components";
import config from "../../../config";

const DrowpDown = styled.select`
  height: 60px;
  width: 100%;
  font-size: 1em;
  text-align: center;
  color: #000000;
  border: 1px solid #eeeeee;
  margin-bottom: 10px;
  font-weight: 400;
  padding-left: 25px;
  box-shadow: ${config.styling.borderShadow()};
  background: ${config.styling.colors.white};
  outline-color: ${config.styling.colors.primary};
`;

export default DrowpDown;
