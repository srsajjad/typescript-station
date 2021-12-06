import React from "react";
import { Station, initStation } from "constants/Station.interface";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { updateStation, currentStation } from "store/slices/stationSlice";
import styles from "./ListItem.module.css";
import { IconCircleMinus, IconCirclePlus } from "@tabler/icons";

interface ListItemProps {
  station: Station;
}

export const ListItem = ({ station }: ListItemProps) => {
  const { stationName, frequency = "", img } = station;
  const { list_item, list_item_info, list_item_expanded, list_item_frequency } =
    styles;
  const selectedStation = useAppSelector(currentStation);
  const dispatch = useAppDispatch();
  const isClicked = selectedStation.frequency === frequency;

  const handleItemClick = () => {
    if (isClicked) dispatch(updateStation(initStation));
    else dispatch(updateStation(station));
  };

  return (
    <div onClick={handleItemClick} className={list_item}>
      <div
        style={{
          visibility: isClicked ? "visible" : "hidden",
          height: isClicked ? "140px" : "0px",
        }}
        className={list_item_expanded}
      >
        <button onClick={(e) => e.stopPropagation()}>
          <IconCirclePlus size={35} />
        </button>
        <img src={img} alt="" />
        <button onClick={(e) => e.stopPropagation()}>
          <IconCircleMinus size={35} />
        </button>
      </div>

      <div className={list_item_info}>
        <div>{stationName}</div>
        <div className={list_item_frequency}>{frequency}</div>
      </div>
    </div>
  );
};
