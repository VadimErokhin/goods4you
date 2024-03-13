import { useMemo } from "react";
import { ButtonTypes } from "../../types";
import style from "./style.module.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonTypes;
  className?: string;
}

function Button(props: ButtonProps) {
  const type = useMemo(() => {
    if (!props.type) {
      return ButtonTypes.Primary;
    }
    return props.type;
  }, [props.type]);

  const classes = useMemo(() => {
    let resultClasses = style.btn;

    if (type === ButtonTypes.Apply) {
      resultClasses += ` ${style.btnApply}`;
    }

    if (type === ButtonTypes.Pagination) {
      resultClasses += ` ${style.btnPagination}`;
    }

    if (type === ButtonTypes.Reset) {
      resultClasses += ` ${style.btnReset}`;
    }

    return resultClasses;
  }, [type]);

  return <button className={classes}>{props.children}</button>;
}

export default Button;
