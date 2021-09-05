import BlockContent from "@sanity/block-content-to-react";
import classes from "./ProjectDetails.module.css";
import sanityClient from "../../src/sanityClient";

const ProjectDetails = ({ project }) => {
  let selectedClasses;

  switch (project.slug.current) {
    case "chuggr":
      selectedClasses = classes.chuggr;
      break;
    case "dear-juna":
      selectedClasses = classes["dear-juna"];
      break;
    case "personal-site":
      selectedClasses = classes["personal-site"];
      break;
    case "code-notebook":
      selectedClasses = classes["code-notebook"];
      break;
    default:
      break;
  }

  return (
    <>
      <div className={`${classes["hero-section"]} ${selectedClasses}`}>
        <h1>{project.title}</h1>
        <h2>{project.name}</h2>
        <h2>{project.role}</h2>
        <img src={project.mainImage.asset.url} alt={`Image of ${project.title} project`} />
      </div>

      <section className={classes.blocks}>
        <BlockContent
          blocks={project.problem}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
        <BlockContent
          blocks={project.solution}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
        <BlockContent
          blocks={project.learned}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </section>
    </>
  );
};

export default ProjectDetails;
