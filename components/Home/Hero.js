import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hair}></div>
      <div className={classes.face}>
        <div className={classes.fringe}></div>
        <div className={classes['eye-brow']}></div>
        <div className={`${classes['eye-brow']} ${classes.second}`}></div>
        <div className={classes.eyes}></div>
        <div className={classes.nose}></div>
        <div className={classes.beard}></div>
        <div className={classes.mouth}>
          <div className={classes.tongue}></div>
        </div>
      </div>
      <div className={classes.ear}></div>
      <div className={`${classes.ear} ${classes.right}`}></div>
      <div className={classes.neck}></div>
      <div className={classes.shirt}></div>
    </div>
  );
};

export default Hero;