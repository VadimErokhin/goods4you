import style from "./style.module.css";

interface CheckboxProps {
  children: React.ReactNode;
  checked: boolean;
  value: string;
  onChange: (newValue: string) => void;
}

function Checkbox(props: CheckboxProps) {
  return (
    <label className={style.label}>
      <input
        onChange={() => props.onChange(props.value)}
        className={style.input}
        type="checkbox"
        value={props.value}
        checked={props.checked}
      />
      <span className={style.customCheckbox}></span>
      {props.children}
    </label>
  );
}

export default Checkbox;
