import Link from '../../atoms/Link/index.js';
import style from './style.module.css'
// import {navItems} from './config'
const navItems = [
  "Catalog",
  "About us",
  "Product selection",
  "Our team",
  "FAQ",
  "For staff",
];

function Navigation() {
  return ( <ul className={style.list}>
    {navItems.map((item: string, index:number) => (
      <Link key={index}>{item}</Link>
    ))}
  </ul> );
}

export default Navigation;