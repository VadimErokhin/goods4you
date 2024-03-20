import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import AllProducts from "./components/pages/AllProducts";
import ProductPage from "./components/pages/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
