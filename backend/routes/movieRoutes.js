const express = require("express")

const particularMovieController = require('../controller/anyParticularMovie')
const popularMovieController = require('../controller/popularMovies')
const searchedMovieController = require('../controller/searchedMovies')


const router = express.Router();

router.get("/popular-movies", popularMovieController)

router.get('/searched-movies', searchedMovieController)

router.get("/particular-movie/:id", particularMovieController)


module.exports = router;