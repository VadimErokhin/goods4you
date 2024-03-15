import InfoText from "../../atoms/InfoText";
import SubTitle from "../../atoms/SubTitile";
import TitleSection from "../../atoms/TitleSection";
import CheckboxWrapper from "../../molecules/CheckboxWrapper";
import { TextTypes } from "../../types";
import style from "./style.module.css";

function Product() {
  return (
    <section className={style.product}>
      <div className={`${style.contentWrapper} container`}>
        <div className={style.titleWrapper}>
          <TitleSection>
            We will select the perfect product for you
          </TitleSection>
          <InfoText type={TextTypes.Info}>
            Answer three questions and we will send you a catalog with the most
            suitable products for you.
          </InfoText>
          <SubTitle>What type of product are you considering?</SubTitle>
        </div>
        <CheckboxWrapper />
      </div>
    </section>
  );
}

export default Product;
