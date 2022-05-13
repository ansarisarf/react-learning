import React, { useState } from 'react';
import Footer from '../../layouts/Footer';
import Menubar from '../../layouts/Menubar';
import Navbar from '../../layouts/Navbar';
import CounterClass from './CounterClass';

function Counter() {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };
  const decrement = () => {
    setCounter(count === 0 ? 0 : count - 1);
  };
  return (
    <>
      <Navbar title="Shashi Ojha" />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Menubar />

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Counter</h1>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="card shadow mb-4">
                  <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Using Functional Component
                    </h6>
                  </div>
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-success btn-circle mx-1"
                      onClick={increment}
                    >
                      <i className="fas fa-plus-circle"> </i>
                    </button>

                    <button className="btn btn-secondary mx-1" type="button">
                      {' '}
                      Count: {count}{' '}
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger btn-circle"
                      onClick={decrement}
                    >
                      <i className="fas fa-minus-circle"> </i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Using Class Component
                    </h6>
                  </div>
                  <div className="card-body">
                    <CounterClass />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Counter;
