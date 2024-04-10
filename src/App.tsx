import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import AllProducts from "./components/pages/AllProducts";
import ProductPage from "./components/pages/ProductPage";
import ErrorPage from "./components/pages/ErrorPage";
import ProductPageEdit from "./components/pages/ProductPageEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="product/:productId/edit" element={<ProductPageEdit />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
