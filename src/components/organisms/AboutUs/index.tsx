import InfoText from "../../atoms/InfoText";
import TitleSection from "../../atoms/TitleSection";
import { TitlesColorTypes } from "../../types";
import style from "./style.module.css";

function AboutUs() {
  return (
    <section id="aboutUs" className={style.aboutUs}>
      <div className={`${style.contentWrapper} container`}>
        <div className={style.textWrapper}>
          <TitleSection className={style.title} type={TitlesColorTypes.White}>
            About us
          </TitleSection>
          <InfoText className={style.text}>
            Every day a person has a choice what to spend his money on. Stores
            and websites offer an endless list of products.
            <br />
            But we will help you make the right choice!
          </InfoText>
          <p className={style.signature}>Goods4you</p>
        </div>
        <img
          className={style.img}
          src="../../../../public/aboutUs.png"
          alt="decorative-picture"
        />
      </div>
    </section>
  );
}

export default AboutUs;
