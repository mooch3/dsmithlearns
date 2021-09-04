import classes from './ProjTitle.module.css';

const ProjTitle = ({ title }) => {
    return (
        <h1 className={classes.title}>{title}</h1>
    )
}

export default ProjTitle;