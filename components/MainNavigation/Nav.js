import classes from './Nav.module.css';
import NavItems from './NavItems';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <NavItems />
        </nav>
    )
}

export default Nav;