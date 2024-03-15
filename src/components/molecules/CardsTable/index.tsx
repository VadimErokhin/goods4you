import Button from "../../atoms/Button";
import Price from "../../atoms/Price";
import ProductName from "../../atoms/ProductName";
import { Card, cards } from "./config";
import style from "./style.module.css";

function CardsTable() {
  return (
    <div>
      <ul className={style.listWrapper}>
        {cards.map((card: Card, index) => (
          <li key={index}>
            <a href={card.href}>
              <img src={card.src} alt="shoes" />
            </a>
            <ProductName>{card.name}</ProductName>
            <Price>{card.price}$</Price>
          </li>
        ))}
        <Button className={style.btn}>Show more</Button>
      </ul>
    </div>
  );
}

export default CardsTable;
