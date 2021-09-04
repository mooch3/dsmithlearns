import classes from "./Tile.module.css";

const Tile = ({ children, project }) => {
  let addedClass;

  if (project === "chuggr") {
    addedClass = classes["chuggr"];
  }
  if (project === "blog") {
    addedClass = classes.blog;
  }
  if (project === "website") {
    addedClass = classes.website;
  }
  if (project === "code notebook") {
    addedClass = classes["code-notebook"];
  }

  return (
    <a className={classes["project-tile"] + " " + addedClass}>{children}</a>
  );
};

export default Tile;
