import React from 'react';
import PropTypes from 'prop-types';

export default function Searchticket({handleOnChange, str}) {
  return (
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-1 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input
                 type="text" 
                 className="form-control bg-light border-0 small" 
                 placeholder="Search for..."
                 name = "searchStr"
                 value={str}
                 onChange={handleOnChange}
                  />
                <div className="input-group-append">
                    <button className="btn btn-info" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>
  )
}
Searchticket.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    // handleOnSearch: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}