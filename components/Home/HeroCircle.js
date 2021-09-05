import classes from "./HeroCircle.module.css";
import Image from "next/image";

const HeroCircle = ({ children, color, img }) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <div className={classes.circle} style={style}>
      {children}
      {img && (
        <img
          src="/dsmithImg.jpeg"
          alt="Picture of Derek with a blue background"
        />
      )}
    </div>
  );
};

export default HeroCircle;
