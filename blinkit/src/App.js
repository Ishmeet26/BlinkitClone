import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App;
