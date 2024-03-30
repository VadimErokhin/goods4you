import { HTMLInputTypeAttribute } from "react";
import BaseInput from "../BaseInput";
import style from "./style.module.css";

interface FormInputFieldProps<T> {
  children: React.ReactNode;
  value: T;
  setValue: (newValue: T) => void;
  type: HTMLInputTypeAttribute;
}

function FormInputField<T = string>(props: FormInputFieldProps<T>) {
  return (
    <label className={style.wrapper}>
      <div className={style.label}>{props.children}</div>
      <BaseInput<T>
        type={props.type}
        value={props.value}
        onInput={props.setValue}
        className={style.input}
      />
    </label>
  );
}

export default FormInputField;
