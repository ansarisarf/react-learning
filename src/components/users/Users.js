import '../employee/dataTables.bootstrap4.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Navbar from '../../layouts/Navbar';
import Menubar from '../../layouts/Menubar';
import Footer from '../../layouts/Footer';

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Navbar title="Shashi Ojha" />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Menubar />
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Using Axios Get Data</h1>

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <button
                  class="btn btn-primary btn-icon-split btn-sm"
                  to="add-employee"
                >
                  <span className="icon text-white-50">
                    <i className="fas fa-plus-circle"></i>
                  </span>
                  <span className="text">Add New</span>
                </button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>EmailID</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>EmailID</th>
                        <th>Address</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {data.map((user, index) => {
                        return (
                          <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                          </tr>
                        );
                      })}
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Users;
