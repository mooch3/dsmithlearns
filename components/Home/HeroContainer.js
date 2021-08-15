import classes from "./HeroContainer.module.css";
import Title from "./Title";
import Hero from "./Hero";
const HeroContainer = () => {
  return (
    <div className={classes["hero-c"]}>
      <Title />
      <Hero />
    </div>
  );
};

export default HeroContainer;
