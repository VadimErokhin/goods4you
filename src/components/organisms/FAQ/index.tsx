import TitleSection from "../../atoms/TitleSection";
import Question from "../../molecules/Question";
import style from "./style.module.css";

function Faq() {
  return (
    <section id="faq" className={style.faq}>
      <TitleSection className={style.title}>FAQ</TitleSection>
      <Question number={1} />
      <Question number={2} />
    </section>
  );
}

export default Faq;
