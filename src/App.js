import React, { useState } from "react";
import styles from "./App.module.scss";
import Logo from "./Components/Logo/Logo";
import Background from "./Components/BackGround/Background";
import Skills from "./Components/Skills/Skills";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const [location, setLocation] = useState(null);
  console.log(location);
  return (
    <div className={styles.App}>
      <Logo></Logo>

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
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
                  key={location.key}
                  component={Background}
                />
                <Route
                  exact
                  path="/skills"
                  location={location}
                  key={location.key}
                  component={Skills}
                ></Route>
                <Route
                  exact
                  path="/project"
                  location={location}
                  key={location.key}
                  component={Projects}
                ></Route>
                <Route
                  exact
                  path="/about-me"
                  location={location}
                  key={location.key}
                  component={AboutMe}
                ></Route>
                <Route
                  exact
                  path="/contact"
                  location={location}
                  key={location.key}
                  component={ContactMe}
                ></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
