import style from "./style.module.css";

interface PriceProps {
  children: React.ReactNode;
}

function Price(props: PriceProps) {
  return <div className={style.price}>{props.children}</div>;
}

export default Price;
