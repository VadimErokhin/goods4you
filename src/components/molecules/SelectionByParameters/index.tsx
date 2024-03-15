import Button from "../../atoms/Button";
import InfoText from "../../atoms/InfoText";
import SubTitle from "../../atoms/SubTitile";
import { ButtonTypes, TextTypes } from "../../types";
import CategoryTable from "../CategoryTable";
import style from "./style.module.css";

function SelectionByParameters() {
  return (
    <div className={style.selection}>
      <SubTitle className={style.subtitle}>
        Selection <br /> by parameters
      </SubTitle>
      <InfoText className={style.infoText} type={TextTypes.Secondary}>
        Category
      </InfoText>
      <CategoryTable />
      <Button type={ButtonTypes.Apply}>Apply</Button>
      <Button type={ButtonTypes.Reset}>Reset</Button>
    </div>
  );
}

export default SelectionByParameters;