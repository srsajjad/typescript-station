import React from "react";
import styles from "./CardBody.module.css";
import { data } from "constants/data";
import { ListItem } from "components";

export const CardBody = () => {
  const { card_body } = styles;

  return (
    <div className={card_body}>
      {data.map((station) => (
        <ListItem key={station.frequency} station={station} />
      ))}
    </div>
  );
};
