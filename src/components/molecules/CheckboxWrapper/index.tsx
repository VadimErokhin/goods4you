import { useGetCategoriesQuery } from "../../../services/api";
import Checkbox from "../../atoms/Checkbox";
import SubTitle from "../../atoms/SubTitile";
import style from "./style.module.css";

interface CheckboxWrapperProps {
  setCategory: (newValue: string) => void;
  currentCategory: string;
}

function CheckboxWrapper(props: CheckboxWrapperProps) {
  const { data } = useGetCategoriesQuery(undefined);

  return (
    <div className={style.contentWrapper}>
      <SubTitle className={style.subtitle}>
        What type of product are you considering?
      </SubTitle>
      <ul className={style.wrapper}>
        {data?.map((category, index) => (
          <li className={style.listItem} key={index}>
            <Checkbox
              onChange={props.setCategory}
              value={category}
              checked={props.currentCategory === category}
            >
              {category}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxWrapper;
