import React, { useState } from 'react';
import Footer from '../../layouts/Footer';
import Menubar from '../../layouts/Menubar';
import Navbar from '../../layouts/Navbar';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newUpText = text.toUpperCase();
    setText(newUpText);
  };

  const handleLoClick = () => {
    let newToText = text.toLowerCase();
    setText(newToText);
  };

  const handleClearClick = () => {
    let newToText = '';
    setText(newToText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleExtraSpaces = () => {
    let newToText = text.split(/[ ]+/);
    setText(newToText.join(' '));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');
  return (
    <>
      <Navbar title="Shashi Ojha" />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Menubar />
          <div
            className="container-fluid"
            style={{ color: props.mode === 'dark' ? 'white' : '#042742' }}
          >
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Text Editor</h1>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      {props.heading}
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        style={{
                          backgroundColor:
                            props.mode === 'dark' ? '#13466e' : 'white',
                          color: props.mode === 'dark' ? 'white' : '#042742',
                        }}
                        id="mybox"
                        value={text}
                        onChange={handleOnChange}
                        rows="5"
                        placeholder="Enter text here......."
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      disabled={text.length === 0}
                      className="btn btn-primary btn-sm mx-1 my-1"
                      onClick={handleUpClick}
                    >
                      Convert to Uppercase
                    </button>
                    <button
                      type="button"
                      disabled={text.length === 0}
                      className="btn btn-primary btn-sm mx-1 my-1"
                      onClick={handleLoClick}
                    >
                      Convert to Lowercase
                    </button>
                    <button
                      type="button"
                      disabled={text.length === 0}
                      className="btn btn-primary btn-sm mx-1 my-1"
                      onClick={handleClearClick}
                    >
                      Clear All Text
                    </button>
                    <button
                      type="button"
                      disabled={text.length === 0}
                      className="btn btn-primary btn-sm mx-1 my-1"
                      onClick={handleCopy}
                    >
                      Copy Text
                    </button>
                    <button
                      type="button"
                      disabled={text.length === 0}
                      className="btn btn-primary btn-sm mx-1 my-1"
                      onClick={handleExtraSpaces}
                    >
                      Remove Extra Spaces
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ color: props.mode === 'dark' ? 'white' : '#042742' }}
            >
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Text Summery
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <div class="card mb-4 py-3 border-left-primary">
                          <div class="card-body">
                            {
                              text.split(/\s+/).filter((element) => {
                                return element.length !== 0;
                              }).length
                            }{' '}
                            words and {text.length} characters
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div class="card mb-4 py-3 border-left-danger">
                          <div class="card-body">
                            {0.008 *
                              text.split(' ').filter((element) => {
                                return element.length !== 0;
                              }).length}{' '}
                            minutes to read
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div class="card mb-4 py-3 border-left-info">
                          <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                              Preview
                            </h6>
                          </div>
                          <div class="card-body">
                            {text.length > 0
                              ? text
                              : 'Nothing to preview here!'}
                          </div>
                        </div>
                      </div>
                    </div>
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
