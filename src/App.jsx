import React from 'react';
import './App.css';
import RouterMap from './router'
import { HashRouter } from 'react-router-dom'
import Nav from './components/navs'


function App() {

  return (
    <HashRouter>
      <Nav></Nav>
      <RouterMap></RouterMap>

    </HashRouter>
  );
}

export default App;