import InfoText from "../../atoms/InfoText";
import { TextTypes } from "../../types";
import { Category, categories } from "./config";
import style from "./style.module.css";

const formatedCategories = categories.reduce((acc, item) => {
  const rowLength = acc.length;
  if (!rowLength) {
    acc[0] = [item];
  } else {
    const currentRow = acc[rowLength - 1];
    const cellLength = currentRow.length;
    if (cellLength < 2) {
      currentRow.push(item);
    } else {
      acc[rowLength] = [item];
    }
  }
  return acc;
}, [] as Category[][]);

interface CategoryTableProps {
  state: string;
  setState: (value: string) => void;
}

function CategoryTable(props: CategoryTableProps) {
  return (
    <ul className={style.table}>
      {formatedCategories.map((row: Category[], rowIndex) => (
        <li className={style.tableItem} key={rowIndex}>
          {row.map((cell: Category, index) => (
            <button
              onClick={() => props.setState(cell.value)}
              className={
                `${props.state}` === cell.value
                  ? `${style.btn} ${style.active}`
                  : `${style.btn}`
              }
              key={`${rowIndex}-${index}`}
            >
              <InfoText
                className={
                  `${props.state}` === cell.value ? ` ${style.active}` : ""
                }
                type={TextTypes.Secondary}
              >
                {cell.name}
              </InfoText>
            </button>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default CategoryTable;
