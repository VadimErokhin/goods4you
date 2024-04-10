import TitleSection from "../../atoms/TitleSection";
import Carousel from "../../molecules/Carousel";
import HeaderWithBack from "../../organisms/HeaderWithBack";
import ProductInfo from "../../molecules/ProductInfo";
import style from "./style.module.css";
import { useGetProductQuery } from "../../../services/api";
import { useParams } from "react-router-dom";
import { ProductData } from "../../types";
import { useMemo } from "react";

// const slides: string[] = [
//   "../../../../public/sneakers.png",
//   "../../../../public/sneakers.png",
//   "../../../../public/sneakers.png",
//   "../../../../public/sneakers.png",
//   "../../../../public/sneakers.png",
// ];

function ProductPage() {
  const { productId } = useParams();
  const { data } = useGetProductQuery(productId as string);
  console.log("productId", productId);

  const productInfo: ProductData = useMemo(() => {
    return data ?? ({} as ProductData);
  }, [data]);
  console.log("data", data);

  console.log("productInfo", productInfo);

  return (
    <div className={style.main}>
      <HeaderWithBack className={style.header} />
      <div className="container">
        <TitleSection className={style.title}>Product</TitleSection>
        <div className={style.wrapper}>
          {productInfo.images && (
            <Carousel
              slides={productInfo.images}
              className={style.carousel}
              // slides={slides}
            />
          )}
          <ProductInfo productId={productId as string} data={productInfo} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
