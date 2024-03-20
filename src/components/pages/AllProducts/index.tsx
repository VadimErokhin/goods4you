import style from "./style.module.css";
import TitleSection from "../../atoms/TitleSection";
import SearchInput from "../../atoms/SearchInput";
import HeaderWithBack from "../../organisms/HeaderWithBack";
import { useState } from "react";
import Button from "../../atoms/Button";
import CardsList from "../../molecules/CardsList";

function AllProducts() {
  const [value, setValue] = useState("");

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
        <CardsList />
      </div>
    </div>
  );
}

export default AllProducts;
