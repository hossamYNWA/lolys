import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="plate with food on it" priority />
        Loly's food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals"> browser our meals</NavLink>
          </li>
          <li>
            <NavLink href="/community"> meet our community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
