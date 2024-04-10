import { Link } from "react-router-dom";
import style from "./style.module.css";
import ProductName from "../../atoms/ProductName";
import Price from "../../atoms/Price";
import { ProductData } from "../../types";

interface CardProps {
  data: ProductData;
}

function Card(props: CardProps) {
  return (
    <Link className={style.link} to={`/product/${props.data.id}`}>
      <div className={style.imgWrapper}>
        <img className={style.img} src={props.data.thumbnail} alt="shoes" />
      </div>
      <ProductName className={style.productName}>
        {props.data.title}
      </ProductName>
      <Price>{props.data.price}$</Price>
    </Link>
  );
}

export default Card;
