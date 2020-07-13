import React from "react";
import styles from "./Header.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
function Header({ slider }) {
  let width, cross, display;
  if (slider === true) {
    width = "60%";
    cross = "30";
    display = "block";
  } else {
    width = "0%";
    cross = "0";
    display = "none";
  }

  console.log(width);
  return (
    <>
      <div style={{ width: width }} className={styles.sliderContainer}>
        <div className={styles.crossContainer}>
          <AiOutlineClose size={cross}></AiOutlineClose>
        </div>
        <div>
          <ul style={{ display: display }} className={styles.sliderList}>
            <li>
              <Link style={{ textDecoration: "none" }} to="/project">
                Projects
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/about-me">
                About
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
