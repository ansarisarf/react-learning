import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './route/Routes';

function App() {
  
  return (
      <div id="wrapper">
        <Router>    
           <Routes/> 
        </Router>
    </div>

  );
}

export default App;
