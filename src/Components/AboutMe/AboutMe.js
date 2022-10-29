import React from 'react';
import styles from './AboutMe.module.scss';
import code from '../../Images/About/code.png';
import responsive from '../../Images/About/responsive.png';
import dynamic from '../../Images/About/dynamic.png';
import testimonial from '../../Images/About/testimonial.png';
import resume from '../../Images/Omkar_Kesarkhane.pdf';
import myPic from '../../Images/MyPic.png';

// import { useHistory } from "react-router";

const AboutMe = () => {
  return (
    <section id='about-me' className={styles.aboutContainer}>
      <div className='section-heading-container'>
        <p className='section-heading'>About Me</p>
        <div className='line'></div>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.img} width='50%' src={myPic} alt='MyImage'></img>
      </div>
      <div className={styles.aboutTextContainer}>
        <p className={styles.aboutText}>
          Hi, I am frontend engineer from India.<br></br>I enjoy building web
          applications. I am specialized in frontend development and also have
          interest in backend development. <br></br> I have
          <span style={{ color: 'var(--primary)' }}>
            {' '}
            2 years and 10 months{' '}
          </span>
          of experience as frontend engineer. Till now I have developed,
          maintained and scaled frontend applications.<br></br> I learn new
          things on web and build side projects in my spare time.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
