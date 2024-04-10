import style from "./style.module.css";

interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}
function SubTitle(props: SubTitleProps) {
  return (
    <h3 className={`${style.title} ${props.className}`}>{props.children}</h3>
  );
}

export default SubTitle;
