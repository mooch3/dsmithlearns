import classes from "./Tile.module.css";

const Tile = ({ children, project }) => {
    let addedClass;

    if (project === 'chuggr') {
        addedClass = classes["chuggr"]
    }
    if (project === 'blog') {
        addedClass = classes.blog
    }

  return (
    <a className={classes["project-tile"] + " " + addedClass}>
      {children}
    </a>
  );
};

export default Tile;
