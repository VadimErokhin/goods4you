import style from "./style.module.css";
import TitleSection from "../../atoms/TitleSection";
import SearchInput from "../../atoms/SearchInput";
import HeaderWithBack from "../../organisms/HeaderWithBack";
import { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import CardsList from "../../molecules/CardsList";
import { useGetProductsQuery } from "../../../services/api";
import { usePagination } from "../../../hooks/usePagination";
import useDebounce from "../../../hooks/useDebounce";

function AllProducts() {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);
  const {
    products,
    paginationParams,
    setProducts,
    setPaginationParams,
    clear,
  } = usePagination();

  const { data } = useGetProductsQuery({
    paging: paginationParams,
    query: debounceValue,
  });

  useEffect(() => {
    if (!data) return;
    setProducts((prev) => [...prev, ...data.products]);
  }, [data]);

  useEffect(() => {
    clear();
  }, [value, clear]);

  return (
    <div className="main">
      <HeaderWithBack className={style.header} />
      <div className="container">
        <TitleSection className={style.title}>All products</TitleSection>
        <div className={style.inputWrapper}>
          <SearchInput
            className={style.input}
            value={value}
            onInput={setValue}
          />
          <Button>Search</Button>
        </div>
        <CardsList
          products={products}
          setPaginationState={setPaginationParams}
          pagination={paginationParams}
        />
      </div>
    </div>
  );
}

export default AllProducts;
