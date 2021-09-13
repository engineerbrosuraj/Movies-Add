import classes from './MoviesItem.module.css';


const MoviesItem = props => {
    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <p>{props.title}</p>
                </blockquote>
                <figcaption>
                    {props.director}
                </figcaption>
            </figure>
        </li>
    )
}


export default MoviesItem;