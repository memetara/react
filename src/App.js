import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {
  return (
    <>
      <Navbar link="Links" />
      <div className="container my-3">
        <TextForm heading="Enter text to analyse below" />
      </div>
    </>
  );
}

export default App;
