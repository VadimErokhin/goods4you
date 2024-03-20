import Logo from "../../atoms/Logo";
import style from "./style.module.css";

interface BaseHeaderProps {
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}
function BaseHeader(props: BaseHeaderProps) {
  return (
    <header className={`${style.header} ${props.className}`}>
      <div
        className={`container ${props.hasBorder && style.border} ${
          style.wrapper
        }`}
      >
        <Logo />
        <div>{props.children}</div>
      </div>
    </header>
  );
}

export default BaseHeader;
