import React from 'react';
import styles from './Home.module.scss';
import resume from '../../Images/Omkar_Kesarkhane.pdf';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Experience from '../Experience/Experience';

function Background() {
  return (
    <div className={styles.container}>
      <div id='home' className={styles.home}>
        <div className={styles.head}>
          <p className={styles.hi}>Hi, I am</p>
          <p className={styles.name}>Omkar Kesarkhane</p>
          <p className={styles.dev}>I build frontends for the web apps.</p>
          <p className={styles['dev-description']}>
            I'm frontend engineer with experince in building scalable and
            maintainable web applications with great asthetics and user
            experince.
          </p>
          <div className={styles.button}>
            <button className={styles.workbtn}>View My Work</button>
            <button>
              <a href={resume} target='_blank' rel='noopener noreferrer'>
                My Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default Background;
