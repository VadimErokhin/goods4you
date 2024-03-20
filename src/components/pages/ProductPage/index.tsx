import TitleSection from "../../atoms/TitleSection";
import Carousel from "../../molecules/Carousel";
import HeaderWithBack from "../../organisms/HeaderWithBack";
import ProductInfo from "../../molecules/ProductInfo";
import style from "./style.module.css";

function ProductPage() {
  return (
    <div className="main">
      <HeaderWithBack className={style.header} />
      <div className="container">
        <TitleSection className={style.title}>Product</TitleSection>
        <div className="wrapper">
          <Carousel />
          <ProductInfo />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
