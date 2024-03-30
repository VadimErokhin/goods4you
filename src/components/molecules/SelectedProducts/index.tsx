import { ProductData } from "../../types";
import BaseCardList from "../BaseCardList";
import style from "./style.module.css";

interface SelectedProductsProps {
  products?: ProductData[];
}
function SelectedProducts(props: SelectedProductsProps) {
  return (
    <div className={style.wrapper}>
      {props.products && (
        <BaseCardList
          className={style.cardsWrapper}
          products={props.products}
        />
      )}
    </div>
  );
}

export default SelectedProducts;
