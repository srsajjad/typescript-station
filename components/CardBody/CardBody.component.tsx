import React from "react";
import styles from "./CardBody.module.css";
import { ListItem } from "components";
import { Station } from "constants/Station.interface";

interface CardBodyProps {
  data: Station[];
  loading: boolean;
}

export const CardBody = ({ data, loading }: CardBodyProps) => {
  const { card_body, card_body_loading } = styles;

  if (loading) return <div className={card_body_loading}>Loading...</div>;

  return (
    <div className={card_body}>
      {data.map((station) => (
        <ListItem key={station.frequency} station={station} />
      ))}
    </div>
  );
};
