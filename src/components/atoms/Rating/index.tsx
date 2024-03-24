import { useMemo } from "react";
import style from "./style.module.css";
import Star from "../../../assets/img/star.svg?react";

interface RatingProps {
  rating: number;
}
function Rating(props: RatingProps) {
  const stars = useMemo(() => {
    const result = [];
    const roundRating = Math.round(props.rating);
    for (let i = 0; i < roundRating; i++) {
      result.push(<Star />);
    }
    return result;
  }, [props.rating]);

  return <div className={style.wrapper}>{stars}</div>;
}

export default Rating;
