import React from "react";
import styles from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Paginated from "../Paginated/Paginated";  
import Cards from "../Cards/Cards";  

const Home = ()=>{
    return (
        <div className={styles.container}>
            <h1>este es el Home</h1>
        <NavBar/>
        <Cards/>
        <Paginated/>
        </div>
    );
};

export default Home;