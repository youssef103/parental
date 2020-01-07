import React from "react";
import Card from "./style";

interface data {
  max10PBB: string;
  max15PBB90: string;
  excessFixedSalary: string;
  parentalSalaryUpto10PBB: string;
  parentalSalaryAbove10PBB: string;
}
interface Props {
  arrData: data;
  classNamne?: string;
}

const CardComponent: React.FC<Props> = ({ arrData, classNamne }) => {
  return (
    <Card>
      <Card.Body>
        <li>
          <span>Max 10 PBB 10%:</span>
          <span>{arrData.max10PBB}</span>
        </li>
        <li>
          <span>Max 15 PBB 90%:</span>
          <span>{arrData.max15PBB90}</span>
        </li>
        <li>
          <span>Överskjutande fast lön:</span>
          <span>{arrData.excessFixedSalary}</span>
        </li>
        <li>
          <span>Föräldralön upp till 10 PBB:</span>
          <span>{arrData.parentalSalaryUpto10PBB}</span>
        </li>
        <li>
          <span>Föräldralön över 10 PBB:</span>
          <span>{arrData.parentalSalaryAbove10PBB}</span>
        </li>
      </Card.Body>
      <Card.Footer>
        <span>Total föräldralön/mån:</span>
        <span>4500000 kr</span>
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
