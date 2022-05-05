import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">{props.title}</div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Employee List</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="employee-list">Employee List</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Posts</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Posts:</h6>
                        <Link className="collapse-item" to="/posts">All Posts</Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Addons
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Learning Task</span>
                </Link>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">For Interview:</h6>
                        <Link className="collapse-item" to="/counter">Counter</Link>
                        <Link className="collapse-item" to="/using-axios">Using Axios</Link>
                        <Link className="collapse-item" to="/text-editor">Text Editor</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/all-tickets">
                    <i className="fas fa-fw fa-clipboard-check"></i>
                    <span>Tickets</span></Link>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-user"></i>
                    <span>Users</span></a>
            </li>


            <hr className="sidebar-divider d-none d-md-block"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
}