import React from "react";
import styles from "./Skills.module.scss";
import html from "../../Images/Skills/Html.png";
import css from "../../Images/Skills/Css.png";
import js from "../../Images/Skills/JS.png";
import bootstrap from "../../Images/Skills/Bootstrap.png";
import react from "../../Images/Skills/React.png";
import sass from "../../Images/Skills/Sass.png";
import mat from "../../Images/Skills/Materialize.png";
import git from "../../Images/Skills/Git.png";
import angular from "../../Images/Skills/Angular.png";
import figma from "../../Images/Skills/figma.png";

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsWrapper}>
        <p className={styles.skills}>Skills</p>
        <p className={styles.line}></p>
      </div>
      <div className={styles.designContainer}>
        <p className={styles.design}>Design</p>
        <div className={styles.logoContainer}>
          <div className={styles.wrapper}>
            <p>Figma</p>
            <img
              style={{ width: "75%" }}
              className={styles.img}
              src={figma}
              alt="HtmlLogo"
            ></img>
          </div>
          <div className={styles.wrapper}>
            <p></p>
            <img className={styles.img} src={html} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p></p>
            <img className={styles.img} src={html} alt="HtmlLogo"></img>
          </div>
        </div>
      </div>
      <div className={styles.codeContainer}>
        <p className={styles.code}>Code</p>

        <div className={styles.logoContainer}>
          <div className={styles.wrapper}>
            <p></p>
            <img className={styles.img} src={html} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p></p>
            <img className={styles.img} src={css} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p>Javascript</p>
            <img className={styles.img} src={js} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p>SASS</p>
            <img className={styles.img} src={sass} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p>Bootstrap</p>
            <img className={styles.img} src={bootstrap} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p>Materialize</p>
            <img className={styles.img} src={mat} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p>React</p>
            <img className={styles.img} src={react} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p>Angular</p>
            <img className={styles.img} src={angular} alt="HtmlLogo"></img>
          </div>
          <div className={styles.wrapper}>
            <p>GIT</p>
            <img className={styles.img} src={git} alt="HtmlLogo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
