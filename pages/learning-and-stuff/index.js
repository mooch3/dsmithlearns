import Pagination from "../../components/Blog/Pagination";
import sanityClient from "../../src/sanityClient";
import Head from 'next/head';

const Learning = ({ data }) => {
  return (
    <>
      <Head>
        <title>Learning and Stuff by Derek</title>
        <meta name="description" content="Derek Smith Posts" />
        <meta
          name="og:title"
          content={"Derek Smith's Blog"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pagination
        pageLimit={Math.ceil(data.length / 5)}
        dataLimit={5}
        data={data}
      />
    </>
  );
};

export default Learning;

export const getStaticProps = async () => {
  const data = await sanityClient.fetch(
    `*[_type == 'post']{
            title,
            slug,
            publishedAt,
            body,
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
        }`
  );

  return {
    props: {
      data,
    },
  };
};
