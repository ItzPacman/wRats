import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./Home/Container";
import WRats from "./wRats/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Container />} />
          <Route path="/wRats" element={< WRats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;