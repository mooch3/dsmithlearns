import classes from "./NavItems.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItems = () => {
  const router = useRouter();

  return (
    <ul className={classes["nav-list"]}>
      <li>
        <Link href="/">
          <a className={router.pathname === "/" ? classes.active : ""}>Work</a>
        </Link>
      </li>
      <li>
        <Link href="/learning-and-stuff">
          <a
            className={router.pathname === "/learning-and-stuff" ? classes.active : ""}
          >
            L&S
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className={router.pathname === "/about" ? classes.active : ""}>About</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavItems;
