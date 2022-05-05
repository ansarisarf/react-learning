import React, {useState, useEffect} from 'react';
import tickets from '../../api/dummy-data.json';
import Navbar from '../../layouts/Navbar';
import Menubar from '../../layouts/Menubar';
import Footer from '../../layouts/Footer';
import { MsgHistory } from './msg/MsgHistory';
import { UpdateTicket } from './msg/UpdateTicket';
import { useParams } from 'react-router-dom';

// const ticket = tickets[0];
const Ticket = () => {
    const { tId } = useParams();
    const[message, setMessage] = useState("");
    const[ticket, setTicket] = useState("");

    useEffect(() => {
        for (let i = 0; i < tickets.length; i++) {
           if (tickets[i].id == tId) {
               setTicket(tickets[i]);
               continue
           }
            
        }
    }, [message, tId]);
    

    const handleOnChange = (e) => {
        setMessage(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    }
  return (
    <>
        <Navbar title="Shashi Ojha"/>
          <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Menubar/>
                    <div className="container-fluid">

                        <h1 className="h3 mb-4 text-gray-800">Ticket</h1>

                        <div className="row">

                            <div className="col-lg-12">

                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Ticket</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div><strong>Subject:</strong> <span>{ticket.subject}</span></div>
                                                <div><strong>Ticket Opened:</strong> <span>{ticket.addedAt}</span></div>
                                                <div><strong>Status:</strong> <span>{ticket.status}</span></div>
                                            </div>
                                            <div className='col-md-6'>
                                                 <button type='button' className='btn btn-outline-success float-right'>Close Ticket</button>
                                            </div>
                                        </div>
                                        <div className="row my-5">
                                            <div className="col-lg-12">
                                                {ticket.history && <MsgHistory msg = {ticket.history}/>}
                                                <UpdateTicket updatemsg = {message} handleOnChange ={handleOnChange} handleOnSubmit ={handleOnSubmit} />
                                            </div>
                                        </div>
                                    </div>
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

export default Ticket