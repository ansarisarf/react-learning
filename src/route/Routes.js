import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Counter from '../components/counter/Counter';
import Dashboard from '../components/Dashboard';
import AddEmployee from '../components/employee/AddEmployee';
import Employee from '../components/employee/Employee';
import TextForm from '../components/forInterview/TextForm';
import Users from '../components/users/Users';
import Posts from '../components/posts/Posts';
import Login from '../components/auth/Login';
import ForgotPassword from '../components/auth/ForgotPassword';
import { AllTickets } from '../components/tickets/AllTickets';
import { Addticket } from '../components/tickets/Addticket';
import Ticket from '../components/tickets/Ticket';
import { PrivateRoute } from './PrivateRoute';

export default function Routes() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
          return alert("Fill all the fields");
        }
        console.log(email, password)
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault()
        if (!email) {
          return alert("Fill the Email Id");
        }
        console.log(email)
    }
    
  return (

        <Router>    
           <Switch>
            <Route exact path="/login">
                <Login
                handleOnChange = {handleOnChange} 
                handleOnSubmit = {handleOnSubmit}
                email = {email} 
                pass = {password} />
            </Route>
            <Route exact path="/forgot-password">
                <ForgotPassword
                handleOnChange = {handleOnChange} 
                handleOnResetSubmit = {handleOnResetSubmit}
                email = {email} />
            </Route>
            <PrivateRoute exact path = "/" >
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/employee-list">
                <Employee />
            </PrivateRoute>
            <PrivateRoute exact path ='/add-employee'>
                <AddEmployee/>
            </PrivateRoute>
            <PrivateRoute exact path="/posts">
                <Posts heading="All Post List" />
            </PrivateRoute>
            <PrivateRoute exact path="/counter">
                <Counter/>
            </PrivateRoute>
            <PrivateRoute exact path="/text-editor">
                <TextForm heading="Enter the text to analysis" />
            </PrivateRoute>
            <PrivateRoute exact path = "/using-axios" >
                <Users heading="Using Axios"/>
            </PrivateRoute>
            <PrivateRoute exact path = "/all-tickets">
                <AllTickets heading="All Tickets"/>
            </PrivateRoute>
            <PrivateRoute exact path = "/add-new-ticket">
                <Addticket heading = "Add New Ticket" />
            </PrivateRoute>
            <PrivateRoute exact path = "/ticket/:tId">
                <Ticket/>
            </PrivateRoute>
        </Switch>
        </Router>
        
  )
}
