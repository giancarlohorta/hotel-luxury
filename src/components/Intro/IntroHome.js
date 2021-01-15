import React from "react";
import IntroContent from "./IntroContent";

import styles from "./IntroHome.module.scss";

const IntroHome = () => {
  return (
    <section className={styles.container_intro}>
      <IntroContent />
    </section>
  );
};

export default IntroHome;
