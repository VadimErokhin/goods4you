import { HTMLInputTypeAttribute } from "react";

interface BaseInputProps<T> {
  value: T;
  placeholder?: string;
  onInput: (newValue: T) => void;
  type: HTMLInputTypeAttribute;
  className?: string;
}

function BaseInput<T = string>(props: BaseInputProps<T>) {
  function handleInput(ev: React.ChangeEvent<HTMLInputElement>) {
    if (props.type === "number") {
      const isValueNan = isNaN(ev.target.valueAsNumber);

      props.onInput(isValueNan ? (0 as T) : (ev.target.valueAsNumber as T));
      return;
    }
    props.onInput(ev.target.value as T);
  }
  return (
    <input
      value={!props.value ? "" : (props.value as string)}
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onInput={handleInput}
    />
  );
}

export default BaseInput;
