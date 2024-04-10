import { useState } from "react";
import InfoText from "../../atoms/InfoText";
import SubTitle from "../../atoms/SubTitile";
import TitleSection from "../../atoms/TitleSection";
import CheckboxWrapper from "../../molecules/CheckboxWrapper";
import { ButtonTypes, TextTypes } from "../../types";
import style from "./style.module.css";
import Button from "../../atoms/Button";

function Product() {
  const [page, setPage] = useState(1);

  return (
    <section className={style.product}>
      <div className={`${style.contentWrapper} container`}>
        <div className={style.titleWrapper}>
          <TitleSection className={style.title}>
            We will select the perfect product for you
          </TitleSection>
          <InfoText className={style.text} type={TextTypes.Info}>
            Answer three questions and we will send you a catalog with the most
            suitable products for you.
          </InfoText>
          <SubTitle>What type of product are you considering?</SubTitle>
        </div>
        <CheckboxWrapper />
        <div className={style.btnWrapper}>
          <p>{page} of 2</p>
          <Button aria-label="Следующая" type={ButtonTypes.Pagination}>
            Next page
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Product;
