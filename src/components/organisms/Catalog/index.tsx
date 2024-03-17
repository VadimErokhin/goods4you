import TitleSection from "../../atoms/TitleSection";
import CardsList from "../../molecules/CardsList";
import SelectionByParameters from "../../molecules/SelectionByParameters";
import style from "./style.module.css";
function Catalog() {
  return (
    <section className={style.catalog}>
      <div className="container">
        <TitleSection className={style.title}>Catalog</TitleSection>
        <div className={style.wrapper}>
          <SelectionByParameters className={style.selection} />
          <CardsList />
        </div>
      </div>
    </section>
  );
}

export default Catalog;
