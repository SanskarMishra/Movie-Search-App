import React, { useState, useEffect } from 'react'
import Card from '../card/Card'
import './MovieList.css'

const MovieList = ({ movies, finalSearch }) => {



    const [currentPage, setCurrentPage] = useState(1);
    const [changedSearch, setChangedSearch] = useState('');

    const cardsPerPage = 8;

    useEffect(() => {

        if (changedSearch !== finalSearch) {
            setChangedSearch(finalSearch)
            setCurrentPage(1);

        }
    }, [finalSearch]);



    return (
        <>


            <div className="movie__list card-container">

                <div className="list__cards">
                    {movies.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((movie) => (

                        <Card key={movie.id} movie={movie} />

                    ))}

                </div>

            </div>


            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <button
                    disabled={currentPage === Math.ceil(movies.length / cardsPerPage)}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>


        </>
    )
}

export default MovieList