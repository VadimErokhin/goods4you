import style from "./style.module.css";

interface SliderNavigationProps {
  slides: string[];
}

function SliderNavigation(props: SliderNavigationProps) {
  return (
    <div className={style.wrapper}>
      {props.slides.map((slide, i) => (
        <a key={i} href={`#slide-${i}`}>
          <img className={style.img} src={slide} alt="slide" />
        </a>
      ))}
    </div>
  );
}

export default SliderNavigation;
