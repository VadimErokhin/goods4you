import style from './style.module.css'

interface LogoProps {
  children:  React.ReactNode,
}

function Logo({children}: LogoProps) {
  return ( <a  className={style.logo} href="#">{children}</a> );
}

export default Logo;