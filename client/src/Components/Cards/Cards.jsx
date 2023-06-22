import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import  {useSelector } from "react-redux";
const Cards = () => {
  const countriesToView= useSelector((state)=>state.countriesToView);
  return (
    <div className={styles.container}>
      {!countriesToView.length ? (
     <h1>no hay card cargadas</h1> 
      ):(
        <Card
        name="Argentina"
        image="https://flagcdn.com/w320/ar.png"
        continents="americano"
        population="40.000.000 hab"
      />
      )}
      
    </div>
  );
};

export default Cards;
