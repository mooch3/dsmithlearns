import classes from './Card.module.css';
import { useRouter } from "next/router";


const Card = ({ children, id }) => {
    const router = useRouter();
  
    const showPostHandler = () => {
        router.push(`/learning-and-stuff/${id}`)
    }
    return (
        <div className={classes.card} onClick={showPostHandler}>
            {children}
        </div>
    )
}

export default Card;