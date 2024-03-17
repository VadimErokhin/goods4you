import Button from "../../atoms/Button";
import InfoText from "../../atoms/InfoText";
import { TextTypes } from "../../types";
import style from "./style.module.css";

function Hero() {
  return (
    <section className={style.hero}>
      <div className="container">
        <h1 className={style.title}>
          Any products from famous brands with worldwide delivery
        </h1>
        <InfoText type={TextTypes.Primary} className={style.text}>
          We sell smartphones, laptops, clothes, shoes and many other products
          at low prices
        </InfoText>
        <Button className={style.btn} aria-label="За покупками">
          Go to shopping
        </Button>
      </div>
    </section>
  );
}

export default Hero;
