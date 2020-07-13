import React, { useContext } from "react";
import styles from "./Logo.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { portfolioContext } from "../../Context/context";
import { SET_DRAWER } from "../../Context/actionTypes";

function Logo() {
  const { dispatch } = useContext(portfolioContext);

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: SET_DRAWER,
      payload: true,
    });
  };

  return (
    <div className={styles.head}>
      <Link to="/">
        <div className={styles.logo}>
          <p>Omkar Kesarkhane</p>
        </div>
      </Link>
      <div className={styles.linkContainer}>
        <ul className={styles.listContainer}>
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
      <div className={styles.menu}>
        <AiOutlineMenu
          onClick={(e) => handleClick(e)}
          className={styles.icon}
          size={30}
        ></AiOutlineMenu>
      </div>
      <Header></Header>
    </div>
  );
}

export default Logo;
// <div className={styles.head}>
