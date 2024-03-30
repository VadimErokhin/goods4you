import InfoText from "../../atoms/InfoText";
import SubTitle from "../../atoms/SubTitile";
import { ProductData, ProductEditPayload, TextTypes } from "../../types";
import style from "./style.module.css";
import { formatPrice } from "../../../helpers";
import { useMemo, useState } from "react";
import Rating from "../../atoms/Rating";
import FormInputField from "../../atoms/FormInputField";
import Button from "../../atoms/Button";
import { useUpdateFormMutation } from "../../../services/api";

interface ProductInfoEditProps {
  data: ProductData;
}

function ProductInfoEdit(props: ProductInfoEditProps) {
  const [price, setPrice] = useState(props.data.price ?? 0);
  const [brand, setBrand] = useState(props.data.brand);
  const [discountPercentage, setDiscountPercentage] = useState(
    props.data.discountPercentage
  );
  const [stock, setStock] = useState(props.data.stock);
  const [category, setCategory] = useState(props.data.category);
  const [description, setDescription] = useState(props.data.description);
  const [updateForm, result] = useUpdateFormMutation();

  const formState = useMemo(() => {
    const result: ProductEditPayload = { id: props.data.id };
    if (price !== props.data.price) {
      result.price = price;
    }
    if (brand !== props.data.brand) {
      result.brand = brand;
    }
    if (discountPercentage !== props.data.discountPercentage) {
      result.discountPercentage = discountPercentage;
    }
    if (stock !== props.data.stock) {
      result.stock = stock;
    }
    if (category !== props.data.category) {
      result.category = category;
    }
    if (description !== props.data.description) {
      result.description = description;
    }
    return result;
  }, [
    price,
    props.data.price,
    brand,
    props.data.brand,
    discountPercentage,
    props.data.discountPercentage,
    stock,
    props.data.stock,
    category,
    props.data.category,
    description,
    props.data.description,
    props.data.id,
  ]);

  const formatedPrice = useMemo(() => {
    return formatPrice(price, discountPercentage);
  }, [price, discountPercentage]);

  function handelPrice(newValue: number) {
    if (isNaN(newValue) || newValue < 0) {
      setPrice(0);
      return;
    }
    setPrice(newValue);
  }

  function handleForm(ev: React.SyntheticEvent) {
    ev.preventDefault();
    updateForm(formState);
  }

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
      <form onSubmit={handleForm} className={style.categoriesContainer}>
        <div className={style.categoryWrapper}>
          <InfoText className={style.rating} type={TextTypes.Description}>
            Rating
          </InfoText>
          <Rating rating={props.data.rating} />
        </div>
        <FormInputField<number>
          setValue={handelPrice}
          type="number"
          value={price}
        >
          <InfoText type={TextTypes.Description}>Base price</InfoText>
        </FormInputField>

        <FormInputField<number>
          value={discountPercentage}
          type="number"
          setValue={setDiscountPercentage}
        >
          <InfoText type={TextTypes.Description}>Discount percentage</InfoText>
        </FormInputField>

        <div className={style.categoryWrapper}>
          <InfoText
            className={style.discountPrice}
            type={TextTypes.Description}
          >
            Discount price
          </InfoText>
          <InfoText type={TextTypes.Secondary}>{formatedPrice}$</InfoText>
        </div>

        <FormInputField<number> value={stock} setValue={setStock} type="number">
          <InfoText type={TextTypes.Description}>Stock</InfoText>
        </FormInputField>

        <FormInputField value={brand} setValue={setBrand} type="text">
          <InfoText type={TextTypes.Description}>Brand</InfoText>
        </FormInputField>

        <FormInputField value={category} setValue={setCategory} type="text">
          <InfoText type={TextTypes.Description}>Category</InfoText>
        </FormInputField>

        <FormInputField
          value={description}
          setValue={setDescription}
          type="text"
        >
          <InfoText type={TextTypes.Description}>Description</InfoText>
        </FormInputField>
        <Button className={style.btn}>Save</Button>
      </form>
    </div>
  );
}

export default ProductInfoEdit;
