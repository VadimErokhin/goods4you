import style from "./style.module.css";

interface LinkItemProps {
  children: React.ReactNode;
  href: string;
}

function LinkItem(props: LinkItemProps) {
  return (
    <a className={style.link} href={props.href}>
      {props.children}
    </a>
  );
}

export default LinkItem;
