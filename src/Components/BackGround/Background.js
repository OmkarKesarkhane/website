import React from "react";
import styles from "./Background.module.scss";
import bottomright from "./bottomBlueCenter.png";
import bottomcenter from "./bottomBlue.png";

function Background() {
  return (
    <div className={styles.home}>
      <div className={styles.back}>
        <div className={styles.head}>
          <p className={styles.hello}>Hello, I a'm</p>
          <p className={styles.name}>Omkar Kesarkhane</p>
          <p className={styles.dev}>Frontend Developer / UI/UX designer</p>
          <div className={styles.button}>
            <button className={styles.Workbtn}>View My Work</button>
            <button className={styles.Aboutbtn}>Explore Me</button>
          </div>
        </div>
      </div>
      {/* <div className={styles.bottomShapes}>
        <img src={bottomright} className={styles.bottomRight} alt=""></img>
        <img src={bottomcenter} className={styles.bottomCenter} alt=""></img>
      </div> */}
    </div>
  );
}

export default Background;
