import React from "react";
import styles from "./ContactMe.module.scss";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  return (
    <div>
      <div className={styles.contactContainer}>
        <div className={styles.skillsWrapper}>
          <p className={styles.skills}>Contact</p>
          <p className={styles.line}></p>
        </div>
        <p className={styles.thankYou}>Thank You for viewing my work.</p>
        <p className={styles.letsConnect}>Lets Connect!</p>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=omkesarkhane@gmail.com"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div class={styles.emailContainer}>
            <span className={styles.icon}>
              <MdEmail size={40}></MdEmail>
            </span>{" "}
            <span className={styles.email}>Email</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/omkar-kesarkhane-ba5611186"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div class={styles.emailContainer}>
            <span className={styles.icon}>
              <GrLinkedin size={40}></GrLinkedin>
            </span>{" "}
            <span className={styles.email}>LinkedIn</span>
          </div>
        </a>
        <a
          href="https://github.com/OmkarKesarkhane/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div class={styles.emailContainer}>
            <span className={styles.icon}>
              <GrGithub size={40}></GrGithub>
            </span>{" "}
            <span className={styles.email}>GitHub</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
