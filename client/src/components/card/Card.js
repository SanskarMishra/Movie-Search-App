import React from "react"
import "./Card.css"
import PopupModal from "../moreDetails/PopupModal";




const Card = ({ movie }) => {




    return (
        <>

            <div className="cards" style={{ textDecoration: "none", color: "white" }} >
                <img className="cards__img" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={<h3>No poster found</h3>} />
                <div className="cards__overlay">
                    <div className="card__title">{movie.original_title}</div>
                    <div className="card__runtime">
                        {movie.release_date}
                        <span className="card__rating">{movie.vote_average}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie.overview.slice(0, 100) + "..."}</div>



                    <PopupModal movie={movie} />


                </div>
            </div >



        </>
    )
}

export default Card