import style from "./style.module.css";
import { TitlesColorTypes } from "../../types";
import { useMemo } from "react";

interface TitleSectionProps {
  children: React.ReactNode;
  type?: TitlesColorTypes;
  className?: string;
}

function TitleSection(props: TitleSectionProps) {
  const type = useMemo<TitlesColorTypes>(() => {
    if (!props.type) {
      return TitlesColorTypes.Black;
    }
    return props.type;
  }, [props.type]);

  const classes = useMemo(() => {
    let resultClasses = style.blackTitle;

    if (props.className) {
      resultClasses += ` ${props.className}`;
    }

    if (type === TitlesColorTypes.White) {
      resultClasses += ` ${style.whiteTitle}`;
    }

    return resultClasses;
  }, [type, props.className]);

  return <h2 className={`${style.title} ${classes}`}>{props.children}</h2>;
}

export default TitleSection;
