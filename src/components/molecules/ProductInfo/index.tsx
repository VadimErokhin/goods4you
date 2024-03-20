import InfoText from "../../atoms/InfoText";
import SubTitle from "../../atoms/SubTitile";
import { TextTypes } from "../../types";
import style from "./style.module.css";
import Star from "../../../assets/img/star.svg?react";

function ProductInfo() {
  return (
    <div className={style.wrapper}>
      <div className={style.headerWrapper}>
        <SubTitle>Product</SubTitle>
        <div className={style.productIdWrapper}>
          <InfoText type={TextTypes.Description} className={style.productId}>
            SKU ID
          </InfoText>
          <InfoText type={TextTypes.Secondary}>5</InfoText>
        </div>
      </div>
      <div className={style.categoriesContainer}>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Rating</InfoText>
          <span>
            <Star />
          </span>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Base price</InfoText>
          <span></span>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Discount percentage</InfoText>
          <span></span>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Discount price</InfoText>
          <span></span>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Stock</InfoText>
          <span></span>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Brand</InfoText>
          <span></span>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Category</InfoText>
          <span></span>
        </div>
        <div className={style.categoryWrapper}>
          <InfoText type={TextTypes.Description}>Description</InfoText>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
