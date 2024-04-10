import style from "./style.module.css";

interface ProductProps {
  children: React.ReactNode;
  className?: string;
}

function ProductName(props: ProductProps) {
  return (
    <div className={`${style.product} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default ProductName;
