import { useGetCategoriesQuery } from "../../../services/api";
import Checkbox from "../../atoms/Checkbox";
import style from "./style.module.css";

function CheckboxWrapper() {
  const { data } = useGetCategoriesQuery(undefined);

  return (
    <ul className={style.wrapper}>
      {data?.map((product, index) => (
        <li className={style.listItem} key={index}>
          <Checkbox>{product}</Checkbox>
        </li>
      ))}
    </ul>
  );
}

export default CheckboxWrapper;
