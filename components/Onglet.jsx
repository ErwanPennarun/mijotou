import React from "react";
import styles from "../styles/Onglet.module.scss";
const Onglet = ({ name, clicked, active }) => {
  const conditional = active
    ? `${styles.item_active} ${styles.onglet__wrapper}`
    : `${styles.onglet__wrapper}`;

  return (
    <>
      {" "}
      <div onClick={clicked} className={styles.link}>
        <div className={conditional}>
          <span className={styles.onglet_content}>{name}</span>
        </div>{" "}
      </div>
    </>
  );
};

export default Onglet;
