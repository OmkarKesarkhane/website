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

        <div className={styles.emailOuter}>
          <a href="mailto:omkesarkhane@gmail.com">
            <div class={styles.emailContainer}>
              <span className={styles.icon}>
                <MdEmail style={{ color: "#0e76e8" }} size={40}></MdEmail>
              </span>{" "}
              <span
                className={styles.email}
                style={{ color: "#2e2f58", paddingLeft: "10px" }}
              >
                Email
              </span>
            </div>
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/omkar-kesarkhane-ba5611186"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div class={styles.Container}>
            <span className={styles.icon}>
              <GrLinkedin style={{ color: "#0e76e8" }} size={40}></GrLinkedin>
            </span>{" "}
            <span className={styles.email}>LinkedIn</span>
          </div>
        </a>
        <a
          href="https://github.com/OmkarKesarkhane/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div class={styles.Container}>
            <span className={styles.icon}>
              <GrGithub style={{ color: "#0e76e8" }} size={40}></GrGithub>
            </span>{" "}
            <span className={styles.email}>GitHub</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
