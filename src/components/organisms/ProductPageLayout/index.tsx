import style from "./style.module.css";

import HeaderWithBack from "../HeaderWithBack";
import TitleSection from "../../atoms/TitleSection";
import Carousel from "../../molecules/Carousel";

interface ProductPageLayoutProps {
  children: React.ReactNode;
  images?: string[];
}

function ProductPageLayout(props: ProductPageLayoutProps) {
  return (
    <div className={style.main}>
      <HeaderWithBack className={style.header} />
      <div className="container">
        <TitleSection className={style.title}>Product</TitleSection>
        <div className={style.wrapper}>
          {props.images && (
            <Carousel slides={props.images} className={style.carousel} />
          )}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ProductPageLayout;
