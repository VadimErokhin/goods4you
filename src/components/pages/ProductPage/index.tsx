import TitleSection from "../../atoms/TitleSection";
import Carousel from "../../molecules/Carousel";
import HeaderWithBack from "../../organisms/HeaderWithBack";
import ProductInfo from "../../molecules/ProductInfo";
import style from "./style.module.css";
import { useGetProductQuery } from "../../../services/api";
import { useParams } from "react-router-dom";
import { ProductData } from "../../types";
import { useMemo } from "react";
import ProductPageLayout from "../../organisms/ProductPageLayout";

function ProductPage() {
  const { productId } = useParams();
  const { data } = useGetProductQuery(productId as string);

  const productInfo: ProductData = useMemo(() => {
    return data ?? ({} as ProductData);
  }, [data]);

  return (
    <ProductPageLayout images={productInfo.images}>
      <ProductInfo data={productInfo} productId={productId as string} />
    </ProductPageLayout>
  );
}

export default ProductPage;
