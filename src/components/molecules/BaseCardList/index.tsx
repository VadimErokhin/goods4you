import style from "./style.module.css";
import { ProductData } from "../../types";
import Card from "../Card";

interface BaseCardListProps {
  products: ProductData[];
  className?: string;
}

function BaseCardList(props: BaseCardListProps) {
  return (
    <ul className={`${style.listWrapper} ${props.className}`}>
      {props.products.map((card: ProductData, index) => (
        <li className={style.listItem} key={index}>
          <Card data={card} />
        </li>
      ))}
    </ul>
  );
}

export default BaseCardList;
