import React from 'react'
import PropTypes from 'prop-types';

export const UpdateTicket = ({handleOnChange, updatemsg, handleOnSubmit}) => {
  return (
    <>
        <form onSubmit={handleOnSubmit}>
            <div className='row'>
                <div className='col-12 my-5 mb-3'>
                    <label>Reply</label>
                    <textarea type='text'
                      className='form-control' 
                      name='details' 
                      value={updatemsg}
                      onChange={handleOnChange} 
                      placeholder='Please Reply your message Here.....'
                      row ="5">
                        
                      </textarea>
                      <button type='submit' className='btn btn-outline-info float-right my-4'>Reply</button>
                </div>
            </div>
        </form>
    </>
  )
}
UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  updatemsg: PropTypes.string.isRequired
}