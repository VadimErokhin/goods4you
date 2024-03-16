import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";
import style from "./style.module.css";

function Footer() {
  return (
    <section className={style.footer}>
      <div className={`container ${style.wrapper}`}>
        <Logo />
        <Navigation />
      </div>
    </section>
  );
}

export default Footer;
