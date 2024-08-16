import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PageStore from './store/PageStore';

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    pages: new PageStore(),
  }}>
    <App />
  </Context.Provider>

);


