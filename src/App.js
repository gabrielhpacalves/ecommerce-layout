import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageCorinthians from "./pages/PageCorinthians";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corinthians" element={<PageCorinthians />} />
      </Routes>
    </Router>
  );
}

export default App;
