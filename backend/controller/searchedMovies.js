const axios = require('axios')

const searchedMovieController = async (req, res) => {
    const { query } = req.query;


    try {
        // Make a GET request to the TMDb API search endpoint
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: process.env.API_KEY,
                query: query
            }
        });

        const resArray = response.data.results;

        const keysToExtract = ['id', 'original_language', 'original_title', 'overview', 'release_date', 'title', 'vote_average', 'vote_count', 'poster_path'];

        const extractedArray = resArray.map((obj) =>
            keysToExtract.reduce((result, key) => {
                if (obj.hasOwnProperty(key)) {
                    result[key] = obj[key];
                }
                return result;
            }, {})
        );


        res.json(extractedArray);
    } catch (error) {
        // console.error('Error fetching movie search results:', error);
        res.status(500).json({ error: 'Unable to fetch movie search results' });
    }
}

module.exports = searchedMovieController
