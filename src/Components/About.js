import React from "react";


export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "2px black solid",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#204a3957" : "white",
    border: "0.1em solid",
    borderColor: props.mode === "dark" ? "white" : "black"
  };

  return (
    <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
      <h1 className="my-3" to="/about">
        About us
      </h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              Text analysis techniques
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              Text classification. Text classification is a process of assigning
              tags to unstructured text data. ...
            </div>
          </div>
        </div>
        <div className="accordion-item ">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              Text a uppercase technique
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              To make text uppercase on a computer, you can use the "Caps Lock"
              key to enable uppercase mode temporarily, or you can select the
              text and apply the "Uppercase" formatting option available in most
              word processing software.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Text lowercase technique
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              To use a keyboard shortcut to change between lowercase, UPPERCASE,
              and Capitalize Each Word, select the text and press SHIFT + F3
              until the case you want is applied.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
