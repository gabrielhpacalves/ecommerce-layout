import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Produtos";
import ProdutoDetalhes from "./pages/ProdutoDetalhes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Page />} />
        <Route path="/produto/:id" element={<ProdutoDetalhes />} />
      </Routes>
    </Router>
  );
}

export default App;
