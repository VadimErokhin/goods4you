import TitleSection from "../../atoms/TitleSection";
import { TitlesColorTypes } from "../../types";
import { images } from "./config";
import style from "./style.module.css";

function Team() {
  return (
    <section className={style.team}>
      <div className="container">
        <TitleSection className={style.title} type={TitlesColorTypes.White}>
          Our team
        </TitleSection>
        <ul className={style.wrapper}>
          {images.map((column, index) => (
            <li className={style.listItem} key={index}>
              {column.map((img, i) => (
                <img className={style.img} key={`${index}-${i}`} src={img} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Team;
