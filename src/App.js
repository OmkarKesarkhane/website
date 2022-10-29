import React, { useReducer } from 'react';
import styles from './App.module.scss';
import Logo from './Components/Logo/Logo';
import Home from './Components/Home/Home';
import { reducer } from './Context/reducer';
import { portfolioContext } from './Context/context';
import './SCSS/main.scss';
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: 'portfolio-61164.firebaseapp.com',

  projectId: 'portfolio-61164',

  storageBucket: 'portfolio-61164.appspot.com',

  messagingSenderId: '439390433101',

  appId: '1:439390433101:web:f53e88bdbac979861ad104',

  measurementId: 'G-XT33EBZGXX',
};
initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
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
