import style from "./style.module.css";
import ProductSelectWizard from "../../molecules/ProductSelectWizard";

function TypesOfProducts() {
  return (
    <section id="products" className={style.products}>
      <div className={`${style.contentWrapper} container`}>
        <ProductSelectWizard />
      </div>
    </section>
  );
}

export default TypesOfProducts;
