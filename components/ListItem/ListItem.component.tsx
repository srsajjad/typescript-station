import React from "react";
import Image from "next/image";
import { IconCircleMinus, IconCirclePlus } from "@tabler/icons";
import { Station, initStation } from "constants/Station.interface";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { updateStation, currentStation } from "store/slices/stationSlice";
import styles from "./ListItem.module.css";

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
  const imgSrc = "/img_taken_from_internet.png" || img;

  const handleItemClick = () => {
    if (isClicked) dispatch(updateStation(initStation));
    else dispatch(updateStation(station));
  };

  return (
    <div
      onClick={handleItemClick}
      className={list_item}
      data-testid="list-item"
    >
      <div
        style={{
          visibility: isClicked ? "visible" : "hidden",
          height: isClicked ? "140px" : "0px",
          marginBottom: isClicked ? "20px" : "0px",
        }}
        className={list_item_expanded}
        data-testid="list-item-expanded"
      >
        <button onClick={(e) => e.stopPropagation()}>
          <IconCirclePlus size={35} />
        </button>
        <Image
          src={imgSrc}
          alt="image taken from internet"
          width="135"
          height="135"
        />
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
