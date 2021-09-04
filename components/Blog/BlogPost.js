import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../src/sanityClient";
import classes from './BlogPost.module.css';
import dateFormat from "../../lib/dateFormat";

const BlogPost = ({ post }) => {
  return (
    <>
      <div className={classes.info}>
        <h1>{post.title}</h1>
        <h3>{dateFormat(post.publishedAt)}</h3>
        <h3>{post.category}</h3>
        <img src={post.mainImage.asset.url} />
      </div>
      <div className={classes.content}>
        <BlockContent
          blocks={post.body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </>
  );
};

export default BlogPost;
