import React, {useState, useEffect} from 'react';
import {url} from '../api'

function Posts(props){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPost = async() => {
            try{
                const response = await fetch(`${url}/post`);
                const json = await response.json();
                setPosts(json);
            }catch(error){
                console.log("Error", error)
            }
        }
        getPost();
    },[])

    return(
        <>
            <div className="container">
                <h4>{ props.heading }</h4>
                <table className="table table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>User</th>
                            <th>Created Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => 
                            {
                            return(
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.username}</td>
                                    <td>{post.createdAt}</td>
                                    <td>
                                        <button type="btn" className='btn btn-primary m-auto'>Edit</button>
                                        <button type="btn" className="btn btn-danger m-auto">Remove</button>
                                    </td>
                                </tr>
                            )
                         }
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Posts