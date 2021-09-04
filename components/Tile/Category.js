import classes from './Category.module.css';

const Category = ({ category }) => {
    return (
        <h2 className={classes.category}>{category}</h2>
    )
}

export default Category;