import style from "./style.module.css";

import AboutUs from "../../organisms/AboutUs";
import Catalog from "../../organisms/Catalog";
import Faq from "../../organisms/FAQ";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/HeaderWithNavigation";
import Hero from "../../organisms/Hero";
import Team from "../../organisms/Team";
import TypesOfProducts from "../../organisms/TypesOfProducts";

function Home() {
  return (
    <div className={style.main}>
      <Header />
      <Hero />
      <Catalog />
      <AboutUs />
      <TypesOfProducts />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
