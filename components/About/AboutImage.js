import classes from "./AboutImage.module.css";
import Image from "next/image";

const AboutImage = () => {
  return (
    <div className={classes["image-container"]}>
      <img 
        src="/aboutImage.jpeg"
        alt="Derek and his daughter."
      />
    </div>
  );
};

export default AboutImage;
