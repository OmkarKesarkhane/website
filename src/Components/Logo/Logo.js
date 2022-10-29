import React, { useContext } from 'react';
import styles from './Logo.module.scss';
import { portfolioContext } from '../../Context/context';
import { SET_DRAWER } from '../../Context/actionTypes';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../Images/logo1.svg';
function Logo() {
  const { state, dispatch } = useContext(portfolioContext);
  const [routes] = useState([
    { name: 'about-me', label: 'About me', id: '#about-me' },
    { name: 'projects', label: 'Work', id: '#projects' },
    { name: 'skills', label: 'Skills', id: '#skills' },
    { name: 'contact', label: 'Contact', id: '#contact' },
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_DRAWER,
      payload: !state.drawer,
    });
  };

  return (
    <div className={styles['navbar-container']}>
      {window.innerWidth > 1024 ? (
        <div className={styles['desktop-navbar']}>
          <div>
            <a href='#home' onClick={handleClick}>
              <img alt='logo' src={logo} width='40' height='40'></img>
            </a>
          </div>
          <div className={styles['links-container']}>
            {routes.map((route) => (
              <div key={route['name']} className={styles.link}>
                <a href={route.id}>{route['label']}</a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.drawer}>
          <div
            className={styles.crossContainer}
            onClick={(e) => handleClick(e)}
          >
            <FaBars className='icon' />
          </div>
          <div
            style={{
              display: state.drawer ? 'block' : 'none',
            }}
            className={styles.sliderList}
          >
            <div className={styles.icon}>
              <FaTimes onClick={(e) => handleClick(e)} />
            </div>
            <ul>
              {routes &&
                routes.map((route) => (
                  <li key={route['name']} onClick={(e) => handleClick(e)}>
                    <a href={route.id}>{route['label']}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
// <div className={styles.head}>
