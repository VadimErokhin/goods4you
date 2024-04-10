import { useEffect, useState } from "react";
import { useGetProductCategoryQuery } from "../../../services/api";
import TitleSection from "../../atoms/TitleSection";
import CardsList from "../../molecules/CardsList";
import SelectionByParameters from "../../molecules/SelectionByParameters";
import style from "./style.module.css";
import { usePagination } from "../../../hooks/usePagination";
function Catalog() {
  const [category, setCategory] = useState("");
  const {
    products,
    paginationParams,
    setProducts,
    setPaginationParams,
    clear,
  } = usePagination();

  const { data } = useGetProductCategoryQuery({
    paging: paginationParams,
    query: category,
  });

  useEffect(() => {
    if (!data) return;
    setProducts((prev) => [...prev, ...data.products]);
  }, [data]);

  useEffect(() => {
    clear();
  }, [category]);

  return (
    <section id="catalog" className={style.catalog}>
      <div className="container">
        <TitleSection className={style.title}>Catalog</TitleSection>
        <div className={style.wrapper}>
          <SelectionByParameters
            setCategory={setCategory}
            className={style.selection}
          />
          <CardsList
            products={products}
            setPaginationState={setPaginationParams}
            pagination={paginationParams}
          />
        </div>
      </div>
    </section>
  );
}

export default Catalog;
