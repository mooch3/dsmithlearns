import BlockContent from "@sanity/block-content-to-react";
import classes from "./ProjectDetails.module.css";
import sanityClient from "../../src/sanityClient";

const ProjectDetails = ({ project }) => {
  let selectedClasses;

  if (project.slug.current === "chuggr") {
    selectedClasses = classes.chuggr;
  }

  if (project.slug.current === "dear-juna") {
    selectedClasses = classes["dear-juna"];
  }

  if (project.slug.current === "personal-site") {
    selectedClasses = classes["personal-site"];
  }

  if (project.slug.current === 'code-notebook') {
      selectedClasses = classes['code-notebook']
  }

  return (
    <>
      <div className={`${classes["hero-section"]} ${selectedClasses}`}>
        <h1>{project.title}</h1>
        <h2>{project.name}</h2>
        <h2>{project.role}</h2>
        <img src={project.mainImage.asset.url} />
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
