import React, { useState } from 'react';
import Navbar from './layouts/Navbar';
import Menubar from './layouts/Menubar';
import Footer from './layouts/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './route/Routes';

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
        
        <Router>   

          <Navbar title="Shashi Ojha" mode={mode} toggleMode={toggleMode}/>
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Menubar/>
                  <Routes/>
              </div>
              <Footer/>
          </div>   

        </Router>
        

    </div>

  );
}

export default App;
