import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./Home/Container";
// import Forus from "./wRats/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
          {/* <Route path="/Forus" element={<Forus />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;