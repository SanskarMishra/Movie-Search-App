import React, { useState } from "react";
import "./PopupModal.css";
import { Modal, Button, Row, Col, Container } from 'react-bootstrap';

const PopupModal = ({ movie }) => {


    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>



            <Modal
                show={show} onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Movie Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>
                                <img style={{ height: '100%', width: '100%' }} src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="movie-details">
                                    <div className="movie-title">{movie ? movie.original_title : ""}</div>
                                    <div className="movie-tagline">{movie ? movie.tagline : ""}</div>
                                    <div className="movie-rating">
                                        {movie ? movie.vote_average : ""} <i className="fas fa-star" />
                                        <span>{movie ? "(" + movie.vote_count + ") votes" : ""}</span>
                                    </div>
                                    <div className="movie-release-date">
                                        {movie ? "Original Language (" + movie.original_language + ")" : ""}
                                    </div>

                                    <div className="movie-release-date">
                                        {movie ? "Release date: " + movie.release_date : ""}
                                    </div>

                                    <div className="movie-synopsis">
                                        <div className="synopsis-heading">Synopsis</div>
                                        <div>{movie ? movie.overview : ""}</div>
                                    </div>
                                </div>
                            </Col>

                        </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PopupModal;




