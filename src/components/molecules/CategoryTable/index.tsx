import { useMemo } from "react";
import { useGetCategoriesQuery } from "../../../services/api";
import InfoText from "../../atoms/InfoText";
import { TextTypes } from "../../types";
import style from "./style.module.css";
import { formatCategories } from "../../../helpers";

interface CategoryTableProps {
  state: string;
  setState: (value: string) => void;
}

function CategoryTable(props: CategoryTableProps) {
  const { data } = useGetCategoriesQuery(undefined);
  const formatedCategories = useMemo(() => {
    return formatCategories(data ?? []);
  }, [data]);

  return (
    <ul className={style.table}>
      {formatedCategories.map((row: string[], rowIndex) => (
        <li className={style.tableItem} key={rowIndex}>
          {row.map((cell: string, index) => (
            <button
              onClick={() => props.setState(cell)}
              className={
                `${props.state}` === cell
                  ? `${style.btn} ${style.active}`
                  : `${style.btn}`
              }
              key={`${rowIndex}-${index}`}
            >
              <InfoText
                className={`${props.state}` === cell ? ` ${style.active}` : ""}
                type={TextTypes.Secondary}
              >
                {cell}
              </InfoText>
            </button>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default CategoryTable;
