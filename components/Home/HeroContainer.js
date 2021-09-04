import classes from "./HeroContainer.module.css";
import HeroCircle from "./HeroCircle";
import Title from "./Title";

const HeroContainer = () => {
  return (
    <section className={classes["hero-section"]}>
      <Title />
      <div className={classes["hero-c"]}>
        <HeroCircle color="rgba(32, 143, 37, .6)">
          <h1>Music</h1>
        </HeroCircle>
        <HeroCircle img />
        <HeroCircle color="rgba(234, 93, 93, .6)">
          <h1>Programming</h1>
        </HeroCircle>
      </div>
    </section>
  );
};

export default HeroContainer;
