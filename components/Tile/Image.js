import classes from './Image.module.css'

const Image = ({ image }) => {
  return <img className={classes['proj-img']} src={image} />;
};

export default Image;
