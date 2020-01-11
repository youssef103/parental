import styled from "styled-components";
import config from "../../../config";

const { styling } = config;

const Switch: any = styled.div``;

const ToggleBtn = styled.span`
  content: "";
  position: absolute;
  top: -3px;
  left: 0px;
  width: 28px;
  height: 28px;
  border-radius: 45px;
  transition: 0.2s;
  background: ${(props: any) =>
    props.isOn ? styling.colors.primary : styling.colors.white};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

const ToggleLabel: any = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 70px;
  height: 25px;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  background: ${styling.colors.darkGray};
  border: 1px solid ${styling.colors.white};

  &:active ${ToggleBtn} {
    width: 60px;
  }
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;

  &:checked + ${ToggleLabel} {
    background: ${styling.colors.secondary};
    ${ToggleBtn} {
      left: calc(100% - 2px);
      transform: translateX(-100%);
      background: ${styling.colors.primary};
    }
  }
`;

Switch.CheckBox = CheckBox;
Switch.ToggleBtn = ToggleBtn;
Switch.ToggleLabel = ToggleLabel;

export default Switch;
