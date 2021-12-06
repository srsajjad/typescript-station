import React, { useState } from "react";
import { CardHeader, CardBody, CardFooter } from "components";
import styles from "./Card.module.css";

export const Card = () => {
  const { card } = styles;

  return (
    <div className={card}>
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
};
