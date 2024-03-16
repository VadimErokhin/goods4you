import style from "./style.module.css";
// import Cross from "../../../assets/img/+.svg";
import InfoText from "../../atoms/InfoText";
import { TextTypes } from "../../types";
import { useState } from "react";

interface QuestionProps {
  number: number;
}

function Question(props: QuestionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.contentWrapper}>
      <div className={style.wrapper}>
        <p className={style.question}>Question {props.number}</p>
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9509 12.3623H25V13.6623H12.9509V26H11.5731V13.6623H0V12.3623H11.5731V0H12.9509V12.3623Z"
            fill="black"
          />
        </svg>
      </div>
      <InfoText className={style.text} type={TextTypes.Info}>
        Long answer to the first question
      </InfoText>
    </div>
  );
}

export default Question;
