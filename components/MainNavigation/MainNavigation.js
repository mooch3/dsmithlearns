import classes from "./MainNavigation.module.css";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const MainNavigation = () => {
  const [scrollStyle, setScrollStyle] = useState({
    backgroundColor: "transparent",
  });

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setScrollStyle({ backgroundColor: "#FDF6F0" });
      } else {
        setScrollStyle({
          backgroundColor: "transparent",
        });
      }
    };

    return () => (window.onscroll = null);
  }, [scrollStyle]);

  return (
    <header className={classes["nav-container"]} style={scrollStyle}>
      <Nav />
    </header>
  );
};

export default MainNavigation;
