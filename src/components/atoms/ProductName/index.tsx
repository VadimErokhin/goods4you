import style from "./style.module.css";

interface ProductProps {
  children: React.ReactNode;
}

function ProductName(props: ProductProps) {
  return <div className={style.product}>{props.children}</div>;
}

export default ProductName;
