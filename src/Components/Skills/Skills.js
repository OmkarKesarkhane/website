import React from 'react';
import styles from './Skills.module.scss';
import html from '../../Images/Skills/Html.png';
import css from '../../Images/Skills/Css.png';
import js from '../../Images/Skills/JS.png';
import react from '../../Images/Skills/React.png';
import sass from '../../Images/Skills/Sass.png';
import git from '../../Images/Skills/Git.png';
import angular from '../../Images/Skills/Angular.png';
import figma from '../../Images/Skills/figma.png';
import photoshop from '../../Images/Skills/photoshop.png';
import xd from '../../Images/Skills/xd.png';
import node from '../../Images/Skills/NodeJs.png';
import babel from '../../Images/Skills/Babel.png';
import webpack from '../../Images/Skills/Webpack.png';
import vue from '../../Images/Skills/Vue.png';
import jest from '../../Images/Skills/Jest.png';
import nextJs from '../../Images/Skills/NextJs.png';
import typescript from '../../Images/Skills/Typescript.png';
import cypress from '../../Images/Skills/Cypress.png';

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsWrapper}>
        <p className={styles.skills}>Skills</p>
        <p className={styles.line}></p>
      </div>
      <div className={styles.codeContainer}>
        <p className={styles.code}>Code</p>

        <div className={styles.logoContainer}>
          <div className={styles.wrapper}>
            <p></p>
            <img className={styles.img} src={html} alt='HtmlLogo'></img>
          </div>
          <div className={styles.wrapper}>
            <p></p>
            <img className={styles.img} src={css} alt='HtmlLogo'></img>
          </div>
          <div className={styles.wrapper}>
            <p>SASS</p>
            <img className={styles.img} src={sass} alt='HtmlLogo'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Javascript</p>
            <img className={styles.img} src={js} alt='HtmlLogo'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Typescript</p>
            <img className={styles.img} src={typescript} alt='Typescript'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Node.js</p>
            <img className={styles.img} src={node} alt='Node.js'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Vue.js</p>
            <img className={styles.img} src={vue} alt='vue'></img>
          </div>
          <div className={styles.wrapper}>
            <p>React</p>
            <img className={styles.img} src={react} alt='HtmlLogo'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Next.js</p>
            <img className={styles.img} src={nextJs} alt='Next.js'></img>
          </div>

          <div className={styles.wrapper}>
            <p>Angular</p>
            <img className={styles.img} src={angular} alt='HtmlLogo'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Jest</p>
            <img className={styles.img} src={jest} alt='Jest'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Cypress</p>
            <img className={styles.img} src={cypress} alt='Cypress'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Webpack</p>
            <img className={styles.img} src={webpack} alt='Webpack'></img>
          </div>
          <div className={styles.wrapper}>
            <p>Babel</p>
            <img className={styles.img} src={babel} alt='Babel'></img>
          </div>
          <div className={styles.wrapper}>
            <p>GIT</p>
            <img className={styles.img} src={git} alt='HtmlLogo'></img>
          </div>
        </div>
      </div>
      <div className={styles.designContainer}>
        <p className={styles.design}>Design Tools</p>
        <div className={styles.logoContainer}>
          <div className={styles.wrapper}>
            <p>Figma</p>
            <img
              style={{ width: '75%' }}
              className={styles.img}
              src={figma}
              alt='HtmlLogo'
            ></img>
          </div>
          <div className={styles.wrapper}>
            <p>Adobe XD</p>
            <img
              className={styles.img}
              style={{ width: '100%' }}
              src={xd}
              alt='HtmlLogo'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
