import InfoText from "../../atoms/InfoText";
import SubTitle from "../../atoms/SubTitile";
import { ProductData, TextTypes } from "../../types";
import style from "./style.module.css";
import { formatPrice } from "../../../helpers";
import { useMemo } from "react";
import Rating from "../../atoms/Rating";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

interface ProductInfoProps {
  data: ProductData;
}

function ProductInfo(props: ProductInfoProps) {
  const navigate = useNavigate();

  function navigateToEdit() {
    navigate(`/product/${props.data.id}/edit`);
  }

  const formatedPrice = useMemo(() => {
    return formatPrice(props.data.price, props.data.discountPercentage);
  }, [props.data.price, props.data.discountPercentage]);

  return (
    <div className={style.wrapper}>
      <div className={style.headerWrapper}>
        <SubTitle>Product</SubTitle>
        <div className={style.productIdWrapper}>
          <InfoText type={TextTypes.Description} className={style.productId}>
            SKU ID
          </InfoText>
          <InfoText type={TextTypes.Secondary}>{props.data.id}</InfoText>
        </div>
      </div>
      <div className={style.categoriesContainer}>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Rating</InfoText>
          <Rating rating={props.data.rating} />
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Base price</InfoText>
          <InfoText type={TextTypes.Secondary}>{props.data.price}</InfoText>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Discount percentage</InfoText>
          <InfoText type={TextTypes.Secondary}>
            {props.data.discountPercentage}
          </InfoText>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Discount price</InfoText>
          <InfoText type={TextTypes.Secondary}>{formatedPrice}</InfoText>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Stock</InfoText>
          <InfoText type={TextTypes.Secondary}>{props.data.stock}</InfoText>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Brand</InfoText>
          <InfoText type={TextTypes.Secondary}>{props.data.brand}</InfoText>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Category</InfoText>
          <InfoText type={TextTypes.Secondary}>{props.data.category}</InfoText>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Description</InfoText>
          <InfoText type={TextTypes.Secondary}>
            {props.data.description}
          </InfoText>
        </div>
        <Button onClick={navigateToEdit} className={style.btn}>
          Edit
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
