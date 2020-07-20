import React from "react";
import styles from "./AboutMe.module.scss";
import design from "../../Images/About/design.png";
import code from "../../Images/About/code.png";
import responsive from "../../Images/About/responsive.png";
import dynamic from "../../Images/About/dynamic.png";
import testimonial from "../../Images/About/testimonial.png";
import resume from "../../Images/Omkar-Kesarkhane(Resume).pdf";
import { useHistory } from "react-router";

const AboutMe = () => {
  const history = useHistory();
  const handleContact = (e) => {
    e.preventDefault();
    history.push("/contact");
  };
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.skillsWrapper}>
        <p className={styles.skills}>About Me</p>
        <p className={styles.line}></p>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.img} alt="MyImage"></img>
      </div>
      <div className={styles.aboutTextContainer}>
        <p className={styles.aboutText}>
          I am a Front End Developer and UI/UX designer based in INDIA.
          <br></br>I am passionate of Interface Design and building dynamic
          websites and Web Applications with thoughtful UI Design & converting
          experiences into Code. I mainly focus on making websites responsive
          and to come up with best solutions with clean & efficient code.
          <br></br>I always want to learn & grow with upskilling myself as a
          fullstack Javascript developer with a keen eye in design .
        </p>
        <p className={styles.aboutText}>Want to know more about Me?</p>
        <div className={styles.btnContainer}>
          <button className={styles.resumebtn}>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              My Resume
            </a>
          </button>
          <button
            onClick={(e) => handleContact(e)}
            className={styles.contactbtn}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className={styles.whatIDoContainer}>
        <p className={styles.Ido}>What I Do?</p>
        <div className={styles.whatIDoWrapper}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={design} alt="HtmlLogo"></img>
            <p>Design</p>
            <p>Simple & Intuitive Design</p>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.img} src={code} alt="HtmlLogo"></img>
            <p>Code</p>
            <p>Pixel Perfect Code</p>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.img} src={dynamic} alt="HtmlLogo"></img>
            <p>Dynamic</p>
            <p>Building Dynamic Websites</p>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.img} src={responsive} alt="HtmlLogo"></img>
            <p>Responsive</p>
            <p>Layout works on every device</p>
          </div>
          <div className={styles.wrapper}>
            <img className={styles.img} src={testimonial} alt="HtmlLogo"></img>
            <p>Testing</p>
            <p>Testing My Work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
