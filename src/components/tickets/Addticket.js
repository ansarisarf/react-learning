import React, {useState, useEffect} from 'react';
import Navbar from '../../layouts/Navbar';
import Menubar from '../../layouts/Menubar';
import Footer from '../../layouts/Footer';
import { shortText } from '../../utils/validations';
// import PropTypes from 'prop-types';

const intialFrmDt = {
    subject: "",
    addate: "",
    details: "",
};
const initialFrmError = {
    subject: false,
    issueDate: false,
    message: false,
};
export const Addticket = (props) => {
    const [frmData, setfrmData] = useState(intialFrmDt);
    const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

    useEffect(() => {}, [frmData])

    const handleTicketChange = (e) => {
        const {name, value} = e.target;

        setfrmData({
            ...frmData,
            [name]:value,
        });
    }

    const handleOnTicketSubmit = async(e) => {
        e.preventDefault()

         setFrmDataErro(initialFrmError);

         const isSubjectValid = await shortText(frmData.subject);

         setFrmDataErro({
             ...initialFrmError,
             subject: !isSubjectValid,
         });

        console.log("Form Request received", frmData);
    }

    
  return (
    <>
        <Navbar title="Shashi Ojha"/>
           <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Menubar/>
                <div className="container-fluid">
           
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">{props.heading}</h6>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleOnTicketSubmit} >
                                    <div className='row'>
                                        <div className='col-6 my-2'>
                                            <label>Subject:</label>
                                            <input
                                             type='text' 
                                             className='form-control'
                                             onChange={handleTicketChange} 
                                             name='subject' 
                                             value={frmData.subject}
                                             placeholder='Enter Subject' />
                                             <span className="text-danger">
                                                { frmDataErro.subject && "* Subject is required!"}
                                             </span>
                                        </div>
                                        
                                    </div>
                                    <div className='row'>
                                        <div div className='col-6 my-2'>
                                            <label>Date:</label>
                                            <input
                                             type='date'
                                             className='form-control'
                                             onChange={handleTicketChange} 
                                             value={frmData.addate}
                                             name='addate' />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6 my-2'>
                                            <label>Ticket Details:</label>
                                            <textarea type='text'
                                             className='form-control' 
                                             name='details' 
                                             value={frmData.details}
                                             onChange={handleTicketChange} 
                                             placeholder='Enter details'>
                                                 
                                             </textarea>
                                        </div>
                                    </div>
                                        <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
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

// Addticket.propTypes = {
//     handleTicketChange: PropTypes.func.isRequired,
//     handleOnTicketSubmit: PropTypes.func.isRequired,
//     frmData: PropTypes.string.isRequired
// }
