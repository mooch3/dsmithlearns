import classes from './AboutContainer.module.css';


const AboutContainer = ({ children }) => {
  return <div className={classes.about}>{children}</div>;
};

export default AboutContainer