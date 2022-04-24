import React, {useState} from 'react';
import {url} from '../../api';


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
        <div className="container-fluid">
           
            <div className='row'>
                <div className="col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Add New Employee</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit = {e => onSubmit(e)}>
                            <div className='row'>
                                <div className='col-6 my-2'>
                                    <label>Employee Name:</label>
                                    <input type='text' className='form-control' name='name'  value={name} onChange = {e => onchangeSubmit(e)} />
                                </div>
                            </div>
                            <div className='row'>
                                <div div className='col-6 my-2'>
                                    <label>Employee Position:</label>
                                    <input type='text' className='form-control' name='position'  value={position} onChange = {e => onchangeSubmit(e)} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 my-2'>
                                    <label>Employee Salary:</label>
                                    <input type='text' className='form-control' name='salary'  value={salary} onChange = {e => onchangeSubmit(e)} />
                                </div>
                            </div>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                        </form>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default AddEmployee