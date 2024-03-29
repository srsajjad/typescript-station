import React from "react";
import { currentStation } from "store/slices/stationSlice";
import { useAppSelector } from "store/hooks";
import styles from "./CardFooter.module.css";

export const CardFooter = () => {
  const { card_footer, footer_title, item_name } = styles;
  const selectedStation = useAppSelector(currentStation);

  return (
    <div className={card_footer}>
      {selectedStation?.stationName && (
        <div className={footer_title}>CURRENTLY PLAYING</div>
      )}
      <div className={item_name} data-testid="card-footer-item-name">
        {selectedStation?.stationName}
      </div>
    </div>
  );
};
