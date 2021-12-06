import { IconPower, IconChevronLeft } from "@tabler/icons";
import React from "react";
import styles from "./CardHeader.module.css";

export const CardHeader = () => {
  const { card_header, header_title, icon_left, icon_right } = styles;

  return (
    <div className={card_header}>
      <button className={icon_left}>
        <IconChevronLeft size={35} color="white" />
      </button>
      <div className={header_title}>STATIONS</div>
      <button className={icon_right}>
        <IconPower size={35} color="white" />
      </button>
    </div>
  );
};
