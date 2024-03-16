import "./App.css";
import AboutUs from "./components/organisms/AboutUs";
import Catalog from "./components/organisms/Catalog";
import Faq from "./components/organisms/FAQ";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";
import Hero from "./components/organisms/Hero";
import Product from "./components/organisms/Product";
import Team from "./components/organisms/Team";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <AboutUs />
      <Product />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
