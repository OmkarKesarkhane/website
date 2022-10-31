import React from 'react';
import styles from './Home.module.scss';
import resume from '../../Images/Omkar_Kesarkhane.pdf';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';
import Experience from '../Experience/Experience';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Background() {
  return (
    <div className={styles.container}>
      <div id='home' className={styles.home}>
        <div className={styles.head}>
          <p className={styles.hi}>Hi, I am</p>
          <p className={styles.name}>Omkar Kesarkhane</p>
          <p className={styles.dev}>I build Web Applications.</p>
          <p className={styles['dev-description']}>
            I'm software engineer specialized in frontend development with
            experince in building scalable and maintainable web applications
            with great asthetics and user experince.
          </p>
          <div className={styles.button}>
            <a href='#projects'>
              <button className={styles.workbtn}>View My Work</button>
            </a>
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

      <div className={styles['social-links']}>
        <div className={styles.line} />
        <a
          href='https://github.com/OmkarK05'
          target='_blank'
          rel='noopener noreferrer'
          title='Github'
        >
          <FaGithub className={styles.icon} size={25} />
        </a>
        <a
          href='https://www.linkedin.com/in/omkar-kesarkhane-ba5611186/'
          target='_blank'
          rel='noopener noreferrer'
          title='LinkedIn'
        >
          <FaLinkedin className={styles.icon} size={25} />
        </a>
        <a href='mailto:omkesarkhane@gmail.com' title='Email me'>
          <MdEmail className={styles.icon} size={25} />
        </a>
        <div className={styles.line} />
      </div>
      <div className={styles.developer}>
        Designed and developed by Omkar Kesarkhane
      </div>
    </div>
  );
}

export default Background;
