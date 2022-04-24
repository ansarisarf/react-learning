import React from 'react';
import { Switch, Route } from "react-router-dom";
import Counter from '../components/counter/Counter';
import Dashboard from '../components/Dashboard';
import AddEmployee from '../components/employee/AddEmployee';
import Employee from '../components/employee/Employee';
import TextForm from '../components/forInterview/TextForm';
import Userdata from '../components/forInterview/Userdata';
import Posts from '../components/posts/Posts';

export default function Routes() {
    
  return (

        <Switch>
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
                <Userdata heading="Using Axios"/>
            </Route>
        </Switch>
  )
}
