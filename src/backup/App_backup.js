import './App.css';
import Navbar from '../layouts/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test from './components/Test';
import Posts from './components/Posts';
import Counter from './components/Counter';
import AddEmployee from './components/AddEmployee';
import Userdata from './components/Userdata';
import Menubar from '../layouts/Menubar';
import Footer from '../layouts/Footer';
import Dashboard from '../components/Dashboard';

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
    <>
      <Router>
      <Menubar/>
      <div className="container-fluid main-container">
  	  <Navbar title="ShasLegacy" mode={mode} toggleMode={toggleMode}/>
        <Switch>
             <Route exact path="/">
              <Dashboard  mode={mode} />
            </Route>
            <Route exact path="/text-form">
            <div className="container my-3">
              <TextForm heading="Enter the text to analysis" mode={mode}/>
            </div>
            </Route>
            <Route exact path="/employee-data">
              <Test  mode={mode} />
            </Route>
            <Route exact path="/posts">
              <Posts heading = "All Post List"  mode={mode} />
            </Route>
            <Route exact path='/counter'>
              <Counter/>
            </Route>
            <Route exact path ='/add-employee'>
              <AddEmployee/>
            </Route>
            <Route exact path ='/userdata'>
              <Userdata/>
            </Route>
        </Switch>
        <Footer/>
    	</div>
      </Router>
    </>
  );
}

export default App;
