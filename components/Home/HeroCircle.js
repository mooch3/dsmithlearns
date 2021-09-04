import classes from "./HeroCircle.module.css";

const HeroCircle = ({ children, color, img }) => {
  const style = {
    backgroundColor: color,
  }
  return (
    <div className={classes.circle} style={style}>
      {children}
      {img && <img src="/dsmithImg.jpeg" />}
    </div>
  );
};

export default HeroCircle;
