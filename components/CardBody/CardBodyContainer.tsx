import React, { useState, useEffect } from "react";
import { CardBody } from "./CardBody.component";
import { Station } from "constants/Station.interface";

export const CardBodyContainer = () => {
  const [data, setData] = useState<Station[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      const { data } = await import("constants/data");
      setData(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return <CardBody data={data} loading={loading} />;
};
