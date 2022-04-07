import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newUpText = text.toUpperCase();
        setText(newUpText);
    }

    const handleLoClick = () =>{
        let newToText = text.toLowerCase();
        setText(newToText);
    }

    const handleClearClick = () =>{
        let newToText = '';
        setText(newToText);
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpaces = () =>{
        let newToText = text.split(/[ ]+/);
        setText(newToText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const[text, setText] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode==='dark'?'white':'#042742' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042742' }} id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handleClearClick}>Clear All Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary btn-sm mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode==='dark'?'white':'#042742' }}>
                <h2>Text Summery</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text : 'Nothing to preview here!'}</p>
            </div>
        </>
    )
}
