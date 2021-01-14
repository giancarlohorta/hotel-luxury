import React from "react";
import Header from "./Header";

import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.container_intro}>
      <Header />
    </section>
  );
};

export default Intro;
