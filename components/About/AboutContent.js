import classes from "./AboutContent.module.css";

const AboutContent = () => {
  return (
    <div className={classes["about-content"]}>
      <h1>I'm Derek, a software engineer and music educator in Tacoma, WA.</h1>
      <p>
        I spent my whole life dreaming of being a band director. I love music
        and music education! But, when I started programming, I found a new
        passion and interest that inspired me to look past the future I made for
        myself. I began Web Development in 2020 and have been building projects,
        applications, and websites since.
      </p>
      <p>
        These days, I am taking on TypeScript, Angular, and continuing personal
        projects with my favorite library, React. When I am not coding, I am
        dreaming of my next applications by finding problems in my every day
        life and thinking about how I can program a solution.
      </p>
      <p>
        Outside of working as a full time teacher and web developer, I like to
        hike, ski, practice my saxophone, and hang with my family. If I have
        time to myself you'll find me facepalming while watching the Mariners or
        golfing.
      </p>
    </div>
  );
};

export default AboutContent;
