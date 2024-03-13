import Link from "../../atoms/LinkItem/index.js";
import style from "./style.module.css";
import { NavItem, navItems } from "./config";

function Navigation() {
  return (
    <ul className={style.list}>
      {navItems.map((item: NavItem, index: number) => (
        <Link href={item.href} key={index}>
          {item.name}
        </Link>
      ))}
    </ul>
  );
}

export default Navigation;
