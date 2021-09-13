import { Fragment, useEffect, useState } from "react";
import classes from './MoviesList.module.css';
import MoviesItem from './MoviesItem';


const MoviesList = (props) => {
    const [moviesList, setMoviesList] = useState([]);
    useEffect((() => {
        const sendRequest = async () => {
            try {
                const response = await fetch('http://localhost:4000/getRecords');
                const responseData = await response.json();
                setMoviesList(responseData);
                console.log(responseData);
            } catch (err) {
                console.log(err);
            }

        };
        sendRequest();
    }), [])
    
    return (
        <Fragment>
            <ul className={classes.list}>
                
                {moviesList.map((movie) => (
                    <MoviesItem key={movie._id}
                        id={movie._id}
                        title={movie.movieTitle}
                        director={movie.directorName}
                    />
                ))}
            </ul>

        </Fragment>
    )
}


export default MoviesList;