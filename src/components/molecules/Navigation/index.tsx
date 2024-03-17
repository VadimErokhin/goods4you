import Link from "../../atoms/LinkItem/index.js";
import style from "./style.module.css";
import { NavItem, navItems } from "./config";

interface NavigationProps {
  className?: string;
}

function Navigation(props: NavigationProps) {
  return (
    <ul className={`${style.list} ${props.className}`}>
      {navItems.map((item: NavItem, index: number) => (
        <Link href={item.href} key={index}>
          {item.name}
        </Link>
      ))}
    </ul>
  );
}

export default Navigation;
