import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import tickets from '../../api/dummy-data.json';
import Navbar from '../../layouts/Navbar';
import Menubar from '../../layouts/Menubar';
import Footer from '../../layouts/Footer';
import Searchticket from './Searchticket';

export const AllTickets = (props) => {
    
     const [str, setStr] = useState('');
     const [dispTickets, setDispTickets] = useState(tickets);

     useEffect(() => {},[str, dispTickets])

    const handleOnChange = (e) => {
        const { value } = e.target
        setStr(value)
        searchTickets(value)
    }

    const searchTickets = (sttr) => {
        const displayTicket = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase()));
        setDispTickets(displayTicket)
    }
  return (
      <>
        <Navbar title="Shashi Ojha"/>
          <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Menubar/>
                <div className="container-fluid">

                <h1 className="h3 mb-2 text-gray-800">{props.heading}</h1>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <Link className="btn btn-primary btn-icon-split btn-sm" to="add-new-ticket">
                        <span className="icon text-white-50"><i className="fas fa-plus-circle"></i></span>
                        <span className="text">Add New Ticket</span></Link>
                        <button className='btn btn-dark btn-icon-split btn-sm float-right'>
                            <span className="text">Total Ticket: {dispTickets.length}</span>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className='float-right mb-1'>
                            <Searchticket handleOnChange={handleOnChange} str={str} />
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Subject</th>
                                        <th>Status</th>
                                        <th>Added Date</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Subject</th>
                                        <th>Status</th>
                                        <th>Added Date</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {dispTickets.length ? (
                                    dispTickets.map((item, index) => {
                                    return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.subject}</td>
                                        <td>{item.status}</td>
                                        <td>{item.addedAt}</td>
                                    </tr>
                                    ) 
                                    })):(
                                        <tr>Tickets are not available</tr>
                                    )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            </div>
              <Footer/>
          </div>  
     </>
  )
}
