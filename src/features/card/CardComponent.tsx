import React from "react";

interface Props {
  arrData: any[];
  classNamne?: string;
}

const CardComponent: React.FC<Props> = ({ arrData, classNamne }) => {
  return (
    <ul>
      {arrData.map((data, index) => (
        <li key={index} className={classNamne}>
          {data.text} {data.value}
        </li>
      ))}
    </ul>
  );
};

export default CardComponent;
