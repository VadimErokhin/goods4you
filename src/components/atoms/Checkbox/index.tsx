import style from "./style.module.css";

interface CheckboxProps {
  children: React.ReactNode;
}

function Checkbox(props: CheckboxProps) {
  return (
    <label className={style.label}>
      <input className={style.input} type="checkbox" />
      <span className={style.customCheckbox}></span>
      {props.children}
    </label>
  );
}

export default Checkbox;
