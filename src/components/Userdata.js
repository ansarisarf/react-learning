import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Userdata = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const getData = async() => {
            try {
                const response = await axios.get(url);
                setData(response.data)
              } catch (error) {
                console.error(error);
              }
        }
        getData()
    },[])

    return(
        <>
            <div className='container'>
                <table className="table table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>EmailID</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => {
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </>
        )

}

export default Userdata