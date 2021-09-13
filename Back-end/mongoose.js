const mongoose = require('mongoose');

const Movie = require('./models/product');

mongoose.connect(
  'mongodb+srv://moviesDB:moviesDB123@cluster0.o9hzi.mongodb.net/moviesDB?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

const createMovie = async (req, res, next) => {
  const createdMovie = new Movie({
    movieTitle: req.body.movieTitle,
    directorName: req.body.directorName
  });
  
  const result = await createdMovie.save();
  console.log(typeof createdMovie._id);
  res.json(result._id);
};

const getMovies = async (req, res, next) => {
  const movies = await Movie.find().exec();
  res.json(movies);
}

exports.createMovie = createMovie;
exports.getMovies = getMovies;
