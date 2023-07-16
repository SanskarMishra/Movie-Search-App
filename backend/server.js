const express = require('express');
const axios = require('axios');
const cors = require("cors")
const dotenv = require('dotenv')
const path = require('path')
const bodyParser = require("body-parser")




dotenv.config()

const app = express();

const corsOptions = {
    origin: "https://sm-movie-search-app.onrender.com" // frontend URI (ReactJS)
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/api/movie', require('./routes/movieRoutes'));



// app.use(express.static(path.join(__dirname, './client/build')))

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'))
// })

const PORT = process.env.PORT || 8050

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
