import { useMemo } from "react";
import { TextTypes } from "../../types";
import style from "./style.module.css";

interface InfoTextProps {
  children: React.ReactNode;
  className?: string;
  type?: TextTypes;
}

function InfoText(props: InfoTextProps) {
  const type = useMemo<TextTypes>(() => {
    if (!props.type) {
      return TextTypes.Primary;
    }

    return props.type;
  }, [props.type]);

  const classes = useMemo(() => {
    let resultClasses = style.text;
    if (props.className) {
      resultClasses += ` ${props.className}`;
    }

    if (type === TextTypes.Secondary) {
      resultClasses += ` ${style.secondaryText}`;
    }

    if (type === TextTypes.Info) {
      resultClasses += ` ${style.infoText}`;
    }

    return resultClasses;
  }, [type]);

  return <p className={classes}>{props.children}</p>;
}

export default InfoText;
