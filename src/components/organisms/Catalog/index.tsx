import TitleSection from "../../atoms/TitleSection";
import CardsTable from "../../molecules/CardsTable";
import SelectionByParameters from "../../molecules/SelectionByParameters";
import style from "./style.module.css";
function Catalog() {
  return (
    <section className={style.catalog}>
      <div className="container">
        <TitleSection className={style.title}>Catalog</TitleSection>
        <div className={style.wrapper}>
          <SelectionByParameters />
          <CardsTable />
        </div>
      </div>
    </section>
  );
}

export default Catalog;
