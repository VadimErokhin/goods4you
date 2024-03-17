import style from "./style.module.css";

interface ImageWithOverlayProps {
  className: string;
  title: string;
  description: string;
  src: string;
}

function ImageWithOverlay(props: ImageWithOverlayProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.overlay}>
        <h4 className={style.title}>{props.title}</h4>
        <p className={style.description}>{props.description}</p>
      </div>
      <img
        src={props.src}
        className={`${props.className} ${style.img} `}
        alt={props.title}
      />
    </div>
  );
}

export default ImageWithOverlay;
