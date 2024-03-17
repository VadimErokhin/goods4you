import { useState } from "react";
import Button from "../../atoms/Button";
import InfoText from "../../atoms/InfoText";
import SubTitle from "../../atoms/SubTitile";
import { ButtonTypes, TextTypes } from "../../types";
import CategoryTable from "../CategoryTable";
import style from "./style.module.css";

interface SelectionByParametersProps {
  className: string;
}

function SelectionByParameters(props: SelectionByParametersProps) {
  const [state, setState] = useState("");
  return (
    <div className={`${style.selection} ${props.className}`}>
      <SubTitle className={style.subtitle}>
        Selection <br /> by parameters
      </SubTitle>
      <InfoText className={style.infoText} type={TextTypes.Secondary}>
        Category
      </InfoText>
      <CategoryTable state={state} setState={setState} />
      <Button aria-label="Применить" type={ButtonTypes.Apply}>
        Apply
      </Button>
      <Button aria-label="Сбросить" type={ButtonTypes.Reset}>
        Reset
      </Button>
    </div>
  );
}

export default SelectionByParameters;
