import { createGlobalStyle } from "styled-components";
import { styling, colors } from "../config";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: ${styling.typography.fontFamily}
}
  body {
    background:  ${colors.lightGray};
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  ::selection{
    background: ${colors.primary};
    color: ${colors.white}
  }

  input, select{
    font-weight: 400  !important;
    font-size: 19px;
  }


  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: ${colors.primary} !important;
    border: 1px solid ${colors.secondary} !important;
  }

  .CalendarDay__selected_span, .CalendarDay__hovered_span {
    background: ${colors.secondary} !important;
    border: 1px solid ${colors.white} !important;
    color: ${colors.white} !important;
  }
  
  .DateInput_input__focused {
    border-bottom: 2px solid ${colors.primary} !important;
  }
  
  .DateRangePickerInput, .DateRangePicker,.SingleDatePicker ,.SingleDatePickerInput{
    width: 100% !important;
    box-shadow: ${styling.borderShadow()};
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
  
  .DateRangePicker{
    margin-bottom: 10px;

    & + div{
      /*position:absolute;*/
      width: 100%;
      text-align: center;
      font-size: ${styling.typography.fontMedSize};
    }
  }

  .DateRangePickerInput, .DateRangePicker{
    .DateInput{
      width:41%;
    }
  } 
`;

export default GlobalStyle;
