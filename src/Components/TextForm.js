import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let n = text.toUpperCase();
    setText(n);
    props.showAlert("converted to uppercase!", "success");
  }
  
  const handleLoClick = () => {
    console.log("lowercase was clicked");
    let n = text.toLowerCase();
    setText(n);
    props.showAlert("converted to lowercase!", "success");
  }
  
  const countDifferentWords = () => {
    const wordsArray = text.split(/\s+/);
    const uniqueWords = new Set(wordsArray);
    console.log("Unique Words:", uniqueWords.size);
    props.showAlert("counted Words!", "success");
  }
  
  const handleUpChange = (event) => {
    console.log("on change");
    setText(event.target.value);
    props.showAlert("Hurray!! ", "success");
  }
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleUpChange}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn mx-1"
          style={{
            backgroundColor: 'blue',
            color: "white"
          }}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn mx-2"
          style={{
            backgroundColor: 'blue',
            color: "white"
          }}
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          className="btn mx-2"
          style={{
            backgroundColor: 'blue',
            color: "white"
          }}
          onClick={countDifferentWords}
        >
          No. of different words
        </button>
      </div>
      <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.08 * text.split(/\s+/).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
