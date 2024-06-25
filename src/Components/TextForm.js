import React, {useState} from "react"

export default function TextForm(props) {

  const handlecopy= ()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const handleUpclick = () => {
   
    let newText = text.toUpperCase();
    
    setText(newText);
    
    props.showalert("success", "Converted to uppercase ")
  }

  const handlelowclick = () => {
   
    let newText = text.toLowerCase();
    
    setText(newText);

    props.showalert("success", "Converted to Lowercase ")
  }

  const handleOnChange = (event) => {
    console.log("change")
    setText(event.target.value)
    
  }
  const [text, setText] = useState(" ")

  return (
    <div className="container"  style={{color: props.mode==='dark'? 'light': 'dark'}} >
      <h1 >{props.heading}</h1>
      <div className="mb-3" >
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
        <button className="btn btn-primary my-3 mx-2" onClick={handlelowclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={handlecopy}>
          Copy Text
        </button>
      </div>
      <div className="container">
      <h1>Your Text Summery</h1>
      <p> {text.split(" ").length} words and {text.length} character</p>
      <p> {0.008 * text.split(" ").length} Minutes to read</p>

      <h1>Preview</h1>

      <p>{text.length>0?text:"Enter something to prview here"}</p>
      
      </div>
    </div>
  ); 
}
