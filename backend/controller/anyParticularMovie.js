const axios = require('axios')

const particularMovieController = async (req, res) => {
    const movieId = req.params.id;

    try {
        // Make a GET request to the TMDb API movie details endpoint
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
                api_key: process.env.API_KEY
            }
        });

        // Send the movie details back to the front-end
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        // console.error('Error fetching movie details:', error);
        res.status(500).json({ error: 'Unable to fetch movie details' });
    }
}


module.exports = particularMovieController