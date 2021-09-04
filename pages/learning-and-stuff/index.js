import Pagination from "../../components/Blog/Pagination";
import sanityClient from '../../src/sanityClient';

const Learning = ({ data }) => {
  return (
  <Pagination 
      pageLimit={Math.ceil(data.length / 5)}
      dataLimit={5}
      data={data}
  />);
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
            data
        }
    }
}