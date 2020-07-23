import React, { useReducer } from "react";
import styles from "./App.module.scss";
import Logo from "./Components/Logo/Logo";
import Background from "./Components/BackGround/Background";
import Skills from "./Components/Skills/Skills";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { reducer } from "./Context/reducer";
import { portfolioContext } from "./Context/context";
const initialState = {
  drawer: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.App}>
      <portfolioContext.Provider value={{ state, dispatch }}>
        <Logo></Logo>

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={500}
                classNames={{
                  appear: styles.MyTransitionAppear,
                  appearActive: styles.MyTransitionAppearActive,
                  enter: styles.MyTransitionEnter,
                  enterActive: styles.MyTransitionEnterActive,
                  exit: styles.MyTransitionExit,
                  exitActive: styles.MyTransitionExitActive,
                }}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    location={location}
                    key={location.pathname}
                    component={Background}
                  />
                  <Route
                    exact
                    path="/skills"
                    location={location}
                    key={location.pathname}
                    component={Skills}
                  ></Route>
                  <Route
                    exact
                    path="/project"
                    location={location}
                    key={location.pathname}
                    component={Projects}
                  ></Route>
                  <Route
                    exact
                    path="/about-me"
                    location={location}
                    key={location.pathname}
                    component={AboutMe}
                  ></Route>
                  <Route
                    exact
                    path="/contact"
                    location={location}
                    key={location.pathname}
                    component={ContactMe}
                  ></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </portfolioContext.Provider>
    </div>
  );
}

export default App;
