import style from "./style.module.css";
import SliderNavigation from "../SliderNavigation";

interface CarouselProps {
  slides: string[];
  className?: string;
}

function Carousel(props: CarouselProps) {
  return (
    <div className={`${style.slider} ${props.className}`}>
      <div className={style.slides}>
        {props.slides.map((slide, index) => (
          <div className={style.slide} id={`slide-${index}`} key={index}>
            <img className={style.img} src={slide} alt="slide" />
          </div>
        ))}
      </div>

      <SliderNavigation slides={props.slides} />
    </div>
  );
}

export default Carousel;
