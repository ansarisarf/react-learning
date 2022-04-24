import React, { useState } from 'react';
import Navbar from './layouts/Navbar';
import Menubar from './layouts/Menubar';
import Dashboard from './components/Dashboard';
import Footer from './layouts/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042742'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
      <div id="wrapper">

        <Navbar title="Shashi Ojha" mode={mode} toggleMode={toggleMode}/>

        <div id="content-wrapper" className="d-flex flex-column">

            <div id="content">

               <Menubar/>

                <Dashboard/>

            </div>
            <Footer/>

        </div>

    </div>

  );
}

export default App;
