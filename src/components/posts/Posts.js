import '../employee/dataTables.bootstrap4.min.css';
import React, {useState, useEffect} from 'react';
import {url} from '../../api';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

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

        <div className="container-fluid">

      <h1 className="h3 mb-2 text-gray-800">{ props.heading }</h1>
      

      <div className="card shadow mb-4">
          <div className="card-header py-3">
              <Link Link class = "btn btn-primary btn-icon-split btn-sm" to="add-post">
              <span className="icon text-white-50"><i className="fas fa-plus-circle"></i></span>
              <span className="text">Add New</span></Link>
          </div>
          <div className="card-body">
              <div className="table-responsive">
                  <table table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                      <thead>
                          <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>User</th>
                            <th>Created Date</th>
                            <th>Action</th>
                          </tr>
                      </thead>
                      <tfoot>
                          <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>User</th>
                            <th>Created Date</th>
                            <th>Action</th>
                          </tr>
                      </tfoot>
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
                                        <button type="btn" className='btn btn-info btn-icon-split btn-sm mx-1'>
                                            <span className="icon text-white-50"><i className="fas fa-edit"></i></span>
                                            <span className="text">Edit</span>
                                        </button>
                                        <button type="btn" className="btn btn-danger btn-icon-split btn-sm">
                                            <span className="icon text-white-50"><i className="fas fa-trash-alt"></i></span>
                                            <span className="text">Remove</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                         }
                        )}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>

    <Helmet>
        <script src="assets/vendor/datatables/jquery.dataTables.min.js"></script>
        <script src="assets/vendor/datatables/dataTables.bootstrap4.min.js"></script>

        <script src="assets/js/demo/datatables-demo.js"></script>
    </Helmet>

    </div>
    )
}

export default Posts