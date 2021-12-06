import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { Station, initStation } from "constants/Station.interface";

export interface StationState {
  currentStation: Station;
}

const initialState: StationState = {
  currentStation: initStation,
};

export const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    updateStation: (state, action: PayloadAction<Station>) => {
      state.currentStation = action.payload;
    },
  },
});

export const { updateStation } = stationSlice.actions;

export const currentStation = (state: RootState) =>
  state.Station.currentStation;

export default stationSlice.reducer;
