import TitleSection from "../../atoms/TitleSection";
import { TitlesColorTypes } from "../../types";
import { images } from "./config";
import style from "./style.module.css";
import ImageWithOverlay from "../../atoms/ImageWithOverlay";

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
                <ImageWithOverlay
                  title={img.name}
                  description={img.position}
                  className={style.img}
                  key={`${index}-${i}`}
                  src={img.src}
                />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Team;
