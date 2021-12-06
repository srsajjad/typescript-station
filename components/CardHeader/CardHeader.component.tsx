import React from "react";
import styles from "./CardHeader.module.css";

export const CardHeader = () => {
  const { card_header } = styles;

  return (
    <div className={card_header}>
      <div>back</div>
      <div>STATIONS</div>
      <div>links</div>
    </div>
  );
};
