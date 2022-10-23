import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { portfolioContext } from '../../Context/context';
import { CSSTransition } from 'react-transition-group';
import { SET_DRAWER } from '../../Context/actionTypes';

function Header() {
  const { state, dispatch } = useContext(portfolioContext);

  let width, display;
  if (state.drawer === true) {
    width = '100%';
    display = 'block';
  } else {
    width = '0%';
    display = 'none';
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: SET_DRAWER,
      payload: false,
    });
  };

  console.log(width);
  return (
    <>
      <CSSTransition
        in={state.drawer}
        timeout={1200}
        classNames={{
          appear: styles.drawerApper,
          appearActive: styles.drawerApperActive,
          enter: styles.drawerEnter,
          enterActive: styles.drawerEnterActive,
          enterDone: styles.drawerEnterDone,
          exit: styles.drawerExit,
          exitActive: styles.drawerExitActive,
        }}
      >
        <div className={styles.drawer}>
          <div
            className={styles.crossContainer}
            onClick={(e) => handleClick(e)}
          >
            {/* <AiOutlineClose size={cross}></AiOutlineClose> */}
            <CSSTransition
              in={state.drawer}
              timeout={500}
              classNames={{
                appear: styles.line1Appear,
                appearActive: styles.line1AppearActive,
                enter: styles.line1Enter,
                enterActive: styles.line1EnterActive,
                enterDone: styles.line1EnterDone,
              }}
            >
              <div className={styles.line1}></div>
            </CSSTransition>
            <CSSTransition
              in={state.drawer}
              timeout={500}
              classNames={{
                appear: styles.line2Appear,
                appearActive: styles.line2AppearActive,
                enter: styles.line2Enter,
                enterActive: styles.line2EnterActive,
                enterDone: styles.line2EnterDone,
              }}
            >
              <div className={styles.line2}></div>
            </CSSTransition>
          </div>
          <div>
            <ul style={{ display: display }} className={styles.sliderList}>
              <li onClick={(e) => handleClick(e)}>
                <Link style={{ textDecoration: 'none' }} to='/project'>
                  Projects
                </Link>
              </li>
              <li onClick={(e) => handleClick(e)}>
                <Link style={{ textDecoration: 'none' }} to='/about-me'>
                  About Me
                </Link>
              </li>
              <li onClick={(e) => handleClick(e)}>
                <Link style={{ textDecoration: 'none' }} to='/skills'>
                  Skills
                </Link>
              </li>
              <li onClick={(e) => handleClick(e)}>
                <Link style={{ textDecoration: 'none' }} to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default Header;
