import classes from "./CardContent.module.css";
import BlocksToText from "../../lib/BlocksToText";
import DateFormat from "../../lib/dateFormat";

const CardContent = ({ title, date, blocks }) => {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      <hr />
      <h3>{DateFormat(date)}</h3>
      <p>{BlocksToText(blocks).substring(0, 200)}...</p>
    </div>
  );
};

export default CardContent;
