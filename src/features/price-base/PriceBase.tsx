import React from "react";
import { DateRangePicker } from "react-dates";
import { IDuration } from "./IPriceBase";

import { Label } from "../../common";
import { hintMessages, errorMessages } from "../../fixtures/configData";

interface Props {}

const PriceBase: React.FC<Props & IDuration> = () => {
  return <div></div>;
};

export default PriceBase;
