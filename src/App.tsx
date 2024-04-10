import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import AllProducts from "./components/pages/AllProducts";
import ProductPage from "./components/pages/ProductPage";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<AllProducts />} />
        <Route
          path="product/:productId"
          loader={async ({ params }) => {
            console.log(params);
          }}
          element={<ProductPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
