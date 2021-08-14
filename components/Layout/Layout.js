import classes from "./Layout.module.css";
import MainNavigation from "../MainNavigation/MainNavigation";

const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
