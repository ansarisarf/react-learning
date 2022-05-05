import React from 'react'
import PropTypes from 'prop-types';

export const MsgHistory = ({msg}) => {
    if (!msg) return null;

  return msg.map((data, index) => (
      <div key={index}>
          <div className="row">
            <div className='col-md-2'>
                <div className='font-weight-bold'>{data.messageBy}</div>
                <div>{data.date}</div>
            </div>
            <div className="col-md-10 card mb-3 py-1 border-bottom-primary">
                <div className="card-body">
                {data.message}
                </div>
            </div>
          </div>
          
      </div>
        
  ))
}
MsgHistory.propTypes = {
    msg: PropTypes.array.isRequired
}