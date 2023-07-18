const axios = require('axios')

const popularMovieController = async (req, res) => {
    try {
        // Make a GET request to the TMDb API search endpoint
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
            params: {
                api_key: process.env.API_KEY
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


        // console.log(extractedArray);

        res.status(200).json(extractedArray);
    } catch (error) {
        console.error('Error fetching movies results:', error);
        res.status(500).json({ error: 'Unable to fetch movies results' });
    }
}

module.exports = popularMovieController;
