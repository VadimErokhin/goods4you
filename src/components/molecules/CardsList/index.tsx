import Button from "../../atoms/Button";
import { PaginationParams, ProductData } from "../../types";
import BaseCardList from "../BaseCardList";
import Card from "../Card";
import style from "./style.module.css";

interface CardsListProps {
  pagination: PaginationParams;
  setPaginationState: (newParams: PaginationParams) => void;
  products?: ProductData[];
}

function CardsList(props: CardsListProps) {
  function handleShowMore() {
    if (!props.products) return;
    props.setPaginationState({
      skip: props.pagination.skip + 9,
      limit: props.pagination.limit,
    });
  }
  return (
    <div className={style.contentWrapper}>
      {props.products && <BaseCardList products={props.products} />}

      <Button
        onClick={handleShowMore}
        aria-label="Show more"
        className={style.btn}
      >
        Show more
      </Button>
    </div>
  );
}

export default CardsList;
