import styled from "styled-components";
import config from "../../../config";

const { styling } = config;

// TODO  deleted after fix Toggle component down
export const Toggle2: any = styled.div`
  float: right;
  margin-bottom: 20px;

  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 70px;
    height: 25px;
    background: ${(props: any) =>
      props.isOn ? styling.colors.secondary : styling.colors.darkGray};
    border-radius: 100px;
    border: 1px solid ${styling.colors.white};
    position: relative;
    transition: background-color 0.2s;
  }

  .react-switch-label .react-switch-button {
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
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 60px;
  }
`;

export const Toggle = styled.input.attrs(props => ({ type: "checkbox" }))`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label .btn-switch {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;

// TODO  improve it
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 35px;
  background: ${(props: any) =>
    props.isOn ? styling.colors.secondary : styling.colors.darkGray};
  border-radius: 100px;
  border: 1px solid ${styling.colors.white};
  position: relative;
  transition: background-color 0.2s;

  &:active .btn-switch {
    width: 60px;
  }

  .btn-switch {
    content: "";
    position: absolute;
    top: -4px;
    left: 0px;
    width: 40px;
    height: 40px;
    border-radius: 45px;
    transition: 0.2s;
    background: ${(props: any) =>
      props.isOn ? styling.colors.primary : styling.colors.white};
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
`;
