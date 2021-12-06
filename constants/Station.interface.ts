export interface Station {
  stationName?: string;
  frequency?: string;
  img?: string;
}

export const initStation: Station = {
  frequency: "",
  img: "",
  stationName: "",
};
