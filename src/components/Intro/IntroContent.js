import React from "react";
import Button from "../Button/Button";
import styles from "./IntroContent.module.scss";

const IntroContent = () => {
  return (
    <>
      <div className={`${styles.introContent} container`}>
        <h2 className={styles.introContent_sobtitle}>WELCOME TO</h2>
        <h1 className={styles.introContent_title}>LUXURY</h1>
        <h2 className={styles.introContent_subtitle}>HOTELS</h2>
        <p className={styles.introContent_text}>
          Book your stay and enjoy Luxury redefined at the most affordable
          rates.
        </p>
        <div className={styles.container_button}>
          <Button>Book Now</Button>
        </div>
      </div>
    </>
  );
};

export default IntroContent;
