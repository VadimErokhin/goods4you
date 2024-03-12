import style from "./style.module.css";

interface LinkProps {
  children: React.ReactNode;
}

function Link({ children }: LinkProps) {
  return (
    <a className={style.link} href="#">
      {children}
    </a>
  );
}

export default Link;
