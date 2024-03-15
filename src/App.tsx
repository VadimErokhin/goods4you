import "./App.css";
import AboutUs from "./components/organisms/AboutUs";
import Catalog from "./components/organisms/Catalog";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Product from "./components/organisms/Product";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <AboutUs />
      <Product />
    </>
  );
}

export default App;
