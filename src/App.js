import React, { useReducer } from 'react';
import styles from './App.module.scss';
import Logo from './Components/Logo/Logo';
import Home from './Components/Home/Home';
import { reducer } from './Context/reducer';
import { portfolioContext } from './Context/context';
import './SCSS/main.scss';

const initialState = {
  drawer: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.App}>
      <portfolioContext.Provider value={{ state, dispatch }}>
        <Logo></Logo>
        <Home></Home>
      </portfolioContext.Provider>
    </div>
  );
}

export default App;
