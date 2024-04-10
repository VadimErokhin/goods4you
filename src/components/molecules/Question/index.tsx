import style from "./style.module.css";
import Plus from "../../../assets/img/plus.svg?react";
import InfoText from "../../atoms/InfoText";
import { TextTypes } from "../../types";
import { useState } from "react";

interface QuestionProps {
  number: number;
}

function Question(props: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSwownText() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={style.contentWrapper}>
      <div className={style.wrapper}>
        <p className={style.question}>Question {props.number}</p>
        <Plus
          className={isOpen ? `${style.active} ${style.plus}` : style.plus}
          onClick={toggleSwownText}
        />
      </div>
      {isOpen && (
        <InfoText className={style.text} type={TextTypes.Info}>
          Long answer to the first question
        </InfoText>
      )}
    </div>
  );
}

export default Question;
