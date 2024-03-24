import Link from "../../atoms/LinkItem/index.js";
import style from "./style.module.css";
import { NavItem, navItems } from "./config";

interface NavigationProps {
  className?: string;
}

function Navigation(props: NavigationProps) {
  const handleClickScroll = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    const href = e.target.href;
    if (!href.includes("#")) return;

    e.preventDefault();
    const itemId = href.split("#")[1];
    const element = document.getElementById(itemId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className={`${style.list} ${props.className}`}>
      {navItems.map((item: NavItem, index: number) => (
        <Link onClick={handleClickScroll} href={item.href} key={index}>
          {item.name}
        </Link>
      ))}
    </ul>
  );
}

export default Navigation;
