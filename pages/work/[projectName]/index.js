import sanityClient from "../../../src/sanityClient";
import ProjectDetails from "../../../components/Projects/ProjectsDetails";

const ProjectName = ({ project }) => {
  return <ProjectDetails project={project} />;
};

export const getStaticPaths = async () => {
  const allPaths = await sanityClient.fetch(`
    *[_type == "project"] {
        slug
    }
  `);

  return {
    fallback: "blocking",
    paths: allPaths.map((path) => ({
      params: { projectName: path.slug.current },
    })),
  };
};

export const getStaticProps = async (context) => {
  const projectName = context.params.projectName;

  const getProject = await sanityClient.fetch(
    `
    *[slug.current == $projectName] {
        title,
        slug,
        category,
        _id,
        body,
        problem,
        solution,
        learned,
        role,
        mainImage{
            asset->{
              _id,
              url
             }
            },
        "name": author->name,
        "category": category->title
    }
    `,
    { projectName }
  );
  if (getProject.length === 0) {
    return {
      notFound: true,
    };
  }

  const project = getProject.shift();
  console.log(project)
  return {
    props: {
      project,
    },
  };
};

export default ProjectName;
