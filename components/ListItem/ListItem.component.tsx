import React from "react";
import { Station, initStation } from "constants/Station.interface";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { updateStation, currentStation } from "store/slices/stationSlice";
import styles from "./ListItem.module.css";

interface ListItemProps {
  station: Station;
}

export const ListItem = ({ station }: ListItemProps) => {
  const { stationName, frequency = "", img } = station;
  const { list_item, list_item_info, list_item_expanded } = styles;
  const selectedStation = useAppSelector(currentStation);
  const dispatch = useAppDispatch();
  const isClicked = selectedStation.frequency === frequency;

  const handleItemClick = () => {
    if (isClicked) dispatch(updateStation(initStation));
    else dispatch(updateStation(station));
  };

  return (
    <div onClick={handleItemClick} className={list_item}>
      <div className={list_item_info}>
        <div>{stationName}</div>
        <div>{frequency}</div>
      </div>

      <div
        style={{ height: isClicked ? "auto" : "0px" }}
        className={list_item_expanded}
      >
        <div>plus icon</div>
        <div>
          <img src={img} alt="" />
        </div>
        <div>minus icon</div>
      </div>
    </div>
  );
};
