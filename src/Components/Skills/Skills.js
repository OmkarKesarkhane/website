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
  const skills = {
    code: [
      { img: html, label: 'HTML5' },
      { img: css, label: 'CSS3' },
      { img: sass, label: 'SASS' },
      { img: js, label: 'Javascript' },
      { img: typescript, label: 'Typescript' },
      { img: react, label: 'ReactJs' },
      { img: vue, label: 'vue.js' },
      { img: node, label: 'Node.js' },
      { img: nextJs, label: 'Next.js' },
      { img: angular, label: 'Angular2+' },
      { img: jest, label: 'Jest' },
      { img: cypress, label: 'Cypress' },
      { img: webpack, label: 'Webpack' },
      { img: babel, label: 'Babel' },
      { img: git, label: 'Git' },
    ],
    design: [
      { img: figma, label: 'Figma' },
      { img: xd, label: 'Adobe XD' },
    ],
  };
  return (
    <section id='skills' className={styles.skillsContainer}>
      <div className='section-heading-container'>
        <p className='section-heading'>My Skills</p>
        <div className='line'></div>
      </div>
      <div className={styles.codeContainer}>
        <div className={styles.logoContainer}>
          {skills['code'].map((skill) => (
            <div className={styles.wrapper}>
              <div className={styles['image-container']}>
                <img className={styles.img} src={skill['img']} alt='HtmlLogo' />
              </div>
              <p className={styles.label}>{skill['label']}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.codeContainer}>
        <div className={styles.logoContainer}>
          {skills['design'].map((skill) => (
            <div className={styles.wrapper}>
              <div className={styles['image-container']}>
                <img className={styles.img} src={skill['img']} alt='HtmlLogo' />
              </div>
              <p className={styles.label}>{skill['label']}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
