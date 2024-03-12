import style from "./style.module.css";
import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";

function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.wrapper}`}>
        <Logo>Goods4you</Logo>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
