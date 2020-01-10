import { createGlobalStyle } from "styled-components";
import config from "../config";

const { styling } = config;

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
  body {
    background:  ${styling.colors.lightGray};
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  ::selection{
    background: ${config.styling.colors.primary};
    color: ${config.styling.colors.white}
  }

  input, select{
    font-weight: 400  !important;
    font-size: 19px;
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${config.styling.colors.primary} !important;
    border: 1px solid ${config.styling.colors.secondary} !important;
  }

  .CalendarDay__selected_span, .CalendarDay__hovered_span {
    background: ${config.styling.colors.secondary} !important;
    border: 1px solid ${config.styling.colors.white} !important;
    color: ${config.styling.colors.white} !important;
  }
  .DateInput_input__focused {
    border-bottom: 2px solid ${config.styling.colors.primary} !important;
  }
  
    .DateRangePickerInput, .DateRangePicker,.SingleDatePicker ,.SingleDatePickerInput{
      width: 100% !important;
      box-shadow: ${config.styling.borderShadow()};
      height:60px;

      .DateInput_input{
        text-align: center  !important;
        font-weight: 400  !important;
        height: 58px;
      }
    }

    .SingleDatePicker ,.SingleDatePickerInput{
    .DateInput{  
      width:90%;
    }
  }
    .DateRangePickerInput, .DateRangePicker{
      .DateInput{
        width:41%;
      }
    }
  
`;

export default GlobalStyle;
