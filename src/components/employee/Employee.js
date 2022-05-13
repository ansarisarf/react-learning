import './dataTables.bootstrap4.min.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../../api';
import { Helmet } from 'react-helmet';
import Navbar from '../../layouts/Navbar';
import Menubar from '../../layouts/Menubar';
import Footer from '../../layouts/Footer';

function Employee(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${url}/employee`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log('error', error);
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
            <h1 className="h3 mb-2 text-gray-800">Employee List</h1>

            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <Link
                  class="btn btn-primary btn-icon-split btn-sm"
                  to="add-employee"
                >
                  <span className="icon text-white-50">
                    <i className="fas fa-plus-circle"></i>
                  </span>
                  <span className="text">Add New</span>
                </Link>
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
                        <th>Position</th>
                        <th>Salary</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {data.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.position}</td>
                            <td>{item.salary}</td>
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
}

export default Employee;
