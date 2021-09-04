import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "qi6sb04d",
  dataset: "production",
  useCdn: true,
});
