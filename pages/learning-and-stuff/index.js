import Pagination from "../../components/Blog/Pagination";
import sanityClient from '../../src/sanityClient';

const Learning = ({ data }) => {
  return (
  <Pagination 
      pageLimit={5}
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
    console.log(data[0].publishedAt)
    return {
        props: {
            data
        }
    }
}