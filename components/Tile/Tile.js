import classes from "./Tile.module.css";
import { useRouter } from "next/router";

const Tile = ({ children, project }) => {
  const router = useRouter();

  const handleShowProject = () => {
    router.push(`/work/${project}`)
  }
  
  let addedClass;

  if (project === "chuggr") {
    addedClass = classes["chuggr"];
  }
  if (project === "dear-juna") {
    addedClass = classes.blog;
  }
  if (project === "personal-site") {
    addedClass = classes.website;
  }
  if (project === "code-notebook") {
    addedClass = classes["code-notebook"];
  }

  return (
    <a onClick={handleShowProject} className={classes["project-tile"] + " " + addedClass}>{children}</a>
  );
};

export default Tile;
