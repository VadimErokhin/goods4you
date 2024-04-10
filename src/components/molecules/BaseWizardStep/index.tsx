import { useState } from "react";
import Button from "../../atoms/Button";
import InfoText from "../../atoms/InfoText";
import TitleSection from "../../atoms/TitleSection";
import { ButtonTypes, TextTypes } from "../../types";
import style from "./style.module.css";

interface BaseWizardStepProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  onBtnClick: () => void;
  step: number;
  btnText: string;
  isBtnDisabled?: boolean;
}

function BaseWizardStep(props: BaseWizardStepProps) {
  return (
    <>
      <div className={style.header}>
        <TitleSection className={style.title}>{props.title}</TitleSection>
        {props.subtitle && (
          <InfoText className={style.text} type={TextTypes.Info}>
            {props.subtitle}
          </InfoText>
        )}
      </div>
      {props.children}
      <div className={style.footer}>
        <p>{props.step} of 2</p>
        <Button
          disabled={props.isBtnDisabled}
          onClick={props.onBtnClick}
          aria-label="Next"
          type={ButtonTypes.Pagination}
        >
          {props.btnText}
        </Button>
      </div>
    </>
  );
}

export default BaseWizardStep;
