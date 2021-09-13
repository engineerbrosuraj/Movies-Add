import React, { useRef } from 'react'
import Card from '../../components/UI/Card';
import classes from './AddNewMovies.module.css';


const AddNewMovies = (props) => {
    const moviesName = useRef();
    const director = useRef();

    const sendDataToApiHandler = async e => {
        e.preventDefault();
        const movieTitle = moviesName.current.value;
        const directorName = director.current.value;

        if (!movieTitle) {
            alert('Enter Movie Name');
            return;
        }
        if (!directorName) {
            alert('Enter Director Name');
            return;
        }
        try {
            const response = await fetch('http://localhost:4000/setRecords', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    movieTitle: movieTitle,
                    directorName: directorName
                })
            });
            const responseData = await response.json();
            console.log(responseData);
            moviesName.current.value = "";
            director.current.value = "";
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Card>
            <form className={classes.form} method="POST" >
                <div className={classes.control}>
                    <label htmlFor="movie" >Movie Title</label>
                    <input type='text' id="movies" ref={moviesName} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="director" >Director Name</label>
                    <input type='text' id="director" ref={director} />
                </div>
                <div className={classes.actions}>
                    <button className="btn" onClick={sendDataToApiHandler}>Add Movie</button>
                </div>
            </form>
        </Card>
    )
}

export default AddNewMovies;