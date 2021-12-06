import { configureStore } from "@reduxjs/toolkit";
import StationReducer from "./slices/stationSlice";

export const store = configureStore({
  reducer: {
    Station: StationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
