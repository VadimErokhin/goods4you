import { SyntheticEvent } from "react";
import style from "./style.module.css";

interface LinkItemProps {
  children: React.ReactNode;
  href: string;
  onClick?: (e: SyntheticEvent<HTMLAnchorElement>) => void;
}

function LinkItem(props: LinkItemProps) {
  return (
    <a onClick={props.onClick} className={style.link} href={props.href}>
      {props.children}
    </a>
  );
}

export default LinkItem;
