import React, { useState, useEffect } from "react";
import { CardBody } from "./CardBody.component";
import { Station } from "constants/Station.interface";
import { getData } from "utils/getData";

export const CardBodyContainer = () => {
  const [data, setData] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    getData().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return <CardBody data={data} loading={loading} />;
};
