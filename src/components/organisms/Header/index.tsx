import style from "./style.module.css";
import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";

function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.wrapper}`}>
        <Logo />
        <Navigation className={style.navigation} />
      </div>
    </header>
  );
}

export default Header;
