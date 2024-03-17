import style from "./style.module.css";
import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";
import Burger from "../../atoms/Burger";

function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.wrapper}`}>
        <Logo />
        <Navigation />
        {/* <Burger /> */}
      </div>
    </header>
  );
}

export default Header;
