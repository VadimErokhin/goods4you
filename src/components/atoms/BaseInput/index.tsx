import { HTMLInputTypeAttribute } from "react";

interface BaseInputProps {
  value: string;
  placeholder: string;
  onInput: (newValue: string) => void;
  type: HTMLInputTypeAttribute;
  className?: string;
}

function BaseInput(props: BaseInputProps) {
  function handleInput(ev: React.ChangeEvent<HTMLInputElement>) {
    props.onInput(ev.target.value);
  }
  return (
    <input
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onInput={handleInput}
    />
  );
}

export default BaseInput;
