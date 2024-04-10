import style from "./style.module.css";

function Burger() {
  return (
    <div className={style.burger}>
      <div className={style.burger__line}></div>
      <div className={style.burger__line}></div>
      <div className={style.burger__line}></div>
    </div>
  );
}

export default Burger;
