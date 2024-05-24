import React, {useState} from "react"

export default function TextForm(props) {
  
  const handleUpclick = () => {
   
    let newText = text.toUpperCase();
    
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("change")
    setText(event.target.value)
    
  }
  const [text, setText] = useState("Enter Text here")

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpclick}>
          Convert to uppercase
        </button>
      </div>
    </div>
  );
}
