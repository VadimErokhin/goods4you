import { useParams } from "react-router-dom";
import ProductPageLayout from "../../organisms/ProductPageLayout";
import { useGetProductQuery } from "../../../services/api";
import { useMemo } from "react";
import { ProductData } from "../../types";
import ProductInfoEdit from "../../molecules/ProductInfoEdit";

function ProductPageEdit() {
  const { productId } = useParams();
  const { data } = useGetProductQuery(productId as string);

  const productInfo: ProductData = useMemo(() => {
    return data ?? ({} as ProductData);
  }, [data]);
  return (
    <ProductPageLayout images={productInfo.images}>
      {data && <ProductInfoEdit data={productInfo} />}
    </ProductPageLayout>
  );
}

export default ProductPageEdit;
