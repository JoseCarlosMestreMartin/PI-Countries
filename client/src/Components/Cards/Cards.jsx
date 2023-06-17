import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
const Cards = () => {
  return (
    <div className={styles.container}>
      <h1>este es Cards</h1>
      <Card
        name="Argentina"
        image="https://flagcdn.com/w320/ar.png"
        continents="americano"
        population="40.000.000 hab"
      />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
