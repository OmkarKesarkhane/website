import React from "react";
import styles from "./Background.module.scss";
import { useHistory } from "react-router";
import resume from "../../Images/Omkar-Kesarkhane(Resume).pdf";

function Background() {
  const history = useHistory();
  let handleWork = (e) => {
    e.preventDefault();
    history.push("/project");
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
            <button className={styles.Aboutbtn}>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                My Resume
              </a>
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
