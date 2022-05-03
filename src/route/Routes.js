import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Counter from '../components/counter/Counter';
import Dashboard from '../components/Dashboard';
import AddEmployee from '../components/employee/AddEmployee';
import Employee from '../components/employee/Employee';
import TextForm from '../components/forInterview/TextForm';
import Users from '../components/users/Users';
import Posts from '../components/posts/Posts';
import Login from '../components/auth/Login';
import ForgotPassword from '../components/auth/ForgotPassword';

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
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/employee-list">
                <Employee />
            </Route>
            <Route exact path ='/add-employee'>
                <AddEmployee/>
            </Route>
            <Route exact path="/posts">
                <Posts heading="All Post List" />
            </Route>
            <Route exact path="/counter">
                <Counter/>
            </Route>
            <Route exact path="/text-editor">
                <TextForm heading="Enter the text to analysis" />
            </Route>
            <Route exact path = "/using-axios" >
                <Users heading="Using Axios"/>
            </Route>
        </Switch>
  )
}
