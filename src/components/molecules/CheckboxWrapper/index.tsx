import Checkbox from "../../atoms/Checkbox";
import { products } from "./config";
import style from "./style.module.css";

function CheckboxWrapper() {
  return (
    <ul className={style.wrapper}>
      {products.map((product, index) => (
        <li className={style.listItem} key={index}>
          <Checkbox>{product.name}</Checkbox>
        </li>
      ))}
    </ul>
  );
}

export default CheckboxWrapper;
