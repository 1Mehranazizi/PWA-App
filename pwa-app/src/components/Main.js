import React from "react";

//Styles
import styles from "./Main.module.css";

//Icons
import SearchIcon from "../assets/img/search.png";

//Images
import Product from "../assets/img/product1.png";
import Product2 from "../assets/img/product2.png";
import Product3 from "../assets/img/product3.png";

const Main = () => {
  return (
    <>
      <div className={styles.searchBox}>
        <input type="text" placeholder="SEARCH" />
        <button>
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </div>
      <div className={styles.banear}>
        <div className={styles.image}>
          <img src={Product} alt="product" />
        </div>
        <div className={styles.info}>
          <h3>Nike ISPA Air</h3>
          <h3>Max 720</h3>
          <p>$184</p>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.product}>
          <img src={Product2} alt="product" />
        </div>
        <div className={styles.product}>
          <img src={Product3} alt="product" />
        </div>
      </div>
    </>
  );
};

export default Main;
