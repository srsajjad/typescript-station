import React, { useState } from "react";
import { CardHeader, CardBodyContainer, CardFooter } from "components";
import styles from "./Card.module.css";

export const Card = () => {
  const { card } = styles;

  return (
    <div className={card}>
      <CardHeader />
      <CardBodyContainer />
      <CardFooter />
    </div>
  );
};
