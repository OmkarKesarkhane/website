import React from "react";
import styles from "./Background.module.scss";
import { useHistory } from "react-router";

function Background() {
  const history = useHistory();
  let handleWork = (e) => {
    e.preventDefault();
    history.push("/project");
  };
  let handleAboutMe = (e) => {
    e.preventDefault();
    history.push("/about-me");
  };
  return (
    <div className={styles.home}>
      <div className={styles.back}>
        <div className={styles.head}>
          <p className={styles.hello}>Hello, I a'm</p>
          <p className={styles.name}>Omkar Kesarkhane</p>
          <p className={styles.dev}>I Design and Code User Interfaces</p>
          <div className={styles.button}>
            <button className={styles.Workbtn} onClick={(e) => handleWork(e)}>
              View My Work
            </button>
            <button
              className={styles.Aboutbtn}
              onClick={(e) => handleAboutMe(e)}
            >
              About Me
            </button>
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
