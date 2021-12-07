import { Station } from "constants/Station.interface";
import { data } from "constants/data";

export const getData = async (): Promise<Station[]> => {
  // call your API here
  // const data = await getDataFromAPI();
  return Promise.resolve(data);
};
