import classes from "./Image.module.css";

const Image = ({ image }) => {
  return (
    <img
      className={classes["proj-img"]}
      src={image}
      alt="A picture of Derek Smith"
    />
  );
};

export default Image;
