import sanityClient from "../../../src/sanityClient";
import BlogPost from "../../../components/Blog/BlogPost";
import Head from 'next/head';

const Slug = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.title + "-" + post.category}
        />
        <meta
          name="og:title"
          content={"Derek Smith" + " Blog Post: " + post.title}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogPost post={post} />
    </>
  );
};

export const getStaticPaths = async () => {
  const getPaths = await sanityClient.fetch(
    `*[_type == "post"]{
            slug
        }`
  );

  return {
    fallback: "blocking",
    paths: getPaths.map((path) => ({
      params: { slug: path.slug.current },
    })),
  };
};

export const getStaticProps = async (context) => {
  const blogId = context.params.slug;

  const selectedPost = await sanityClient.fetch(
    `*[slug.current == $blogId] {
            title,
            slug,
            category,
            _id,
            publishedAt,
            body,
            mainImage{
              asset->{
                _id,
                url
               }
              },
            "name": author->name,
            "category": category->title
        }`,
    { blogId }
  );

  if (selectedPost.length === 0) {
    return {
      notFound: true,
    };
  }
  const post = selectedPost.shift();

  return {
    props: {
      post,
    },
  };
};

export default Slug;
