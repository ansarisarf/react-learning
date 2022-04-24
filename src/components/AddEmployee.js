import React, {useState} from 'react';
import {url} from '../api'
function AddEmployee(){
    const [employee, setEmployee] = useState({
        name: "",
        position:"",
        salary:""
    });

    const {name, position, salary} = employee;

    const onchangeSubmit = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    };
    
    const onSubmit = e => {
        e.preventDefault();

        fetch(`${url}/employee`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              },
            body: JSON.stringify(employee)
        })
        .then(response => response.json()).then(json =>{
            console.log("jsssson ", json)
        })

    }
    return(
        <div className="container">
            <div className='row'>
                <div className='col-12 card'>
                    <div className='card-header'>
                        <h5>Add New Employee</h5>
                    </div>
                    <div className='card-body'>
                        <form onSubmit = {e => onSubmit(e)}>
                            <div className='row'>
                                <div className='col-6 col-offset-3 my-3'>
                                    <input type='text' className='form-control' name='name'  value={name} onChange = {e => onchangeSubmit(e)} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 col-offset-3 my-3'>
                                    <input type='text' className='form-control' name='position'  value={position} onChange = {e => onchangeSubmit(e)} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 col-offset-3 my-3'>
                                    <input type='text' className='form-control' name='salary'  value={salary} onChange = {e => onchangeSubmit(e)} />
                                </div>
                            </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee