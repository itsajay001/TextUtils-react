import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textutils" />

      <div className="container my-3">

        <TextForm heading="Enter text" />
        
      </div>
    </>
  );
}

export default App;

