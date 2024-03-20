import LinkItem from "../../atoms/LinkItem";
import BaseHeader from "../BaseHeader";
import style from "./style.module.css";

interface HeaderWithBack {
  className?: string;
}

function HeaderWithBack(props: HeaderWithBack) {
  return (
    <BaseHeader className={`${style.header} ${props.className}`}>
      <LinkItem href="/">Back to site</LinkItem>
    </BaseHeader>
  );
}

export default HeaderWithBack;
