import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Test(props) {

  const[data, setData] = useState([]);

  useEffect(() =>{
    const url = "http://localhost:5000/api/v1/employee";
    const getData = async() => {
      try{
        const response = await fetch(url);
        const json = await response.json();
        setData(json)
      }catch(error){
        console.log("error", error)
      }
    }
    getData()
  },[])

  
  return (
    <div>
      <div className="container">
      <h3 style={{ color: props.mode==='dark'?'white':'#042742' }}>Employee Data</h3>
      <Link to='add-employee' className='btn btn-primary my-3'>Add Employee</Link>
        <table className="table table-responsive table-bordered" style={{ backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042742' }}>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Position</td>
              <td>Salary</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return(<tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.salary}</td>
              </tr> )
            })}
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Test