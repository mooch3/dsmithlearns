import classes from './MainNavigation.module.css';
import Nav from './Nav';

const MainNavigation = () => {
    return (
        <header className={classes['nav-container']}>
            <Nav />
        </header>
    )
}

export default MainNavigation;