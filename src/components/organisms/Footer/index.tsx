import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";
import style from "./style.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.wrapper}`}>
        <Logo />
        <Navigation className={style.navigation} />
      </div>
    </footer>
  );
}

export default Footer;
