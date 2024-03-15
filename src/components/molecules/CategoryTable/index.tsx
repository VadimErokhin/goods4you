import InfoText from "../../atoms/InfoText";
import { TextTypes } from "../../types";
import { Product, products } from "./config";
import style from "./style.module.css";

function CategoryTable() {
  return (
    <ul className={style.table}>
      {products.map((product: Product, index) => (
        <li className={style.tableItem} key={index}>
          <InfoText type={TextTypes.Secondary}>{product.name}</InfoText>
        </li>
      ))}
    </ul>
  );
}

export default CategoryTable;
