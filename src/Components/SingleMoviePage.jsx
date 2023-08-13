import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../Context/MoviesContext";
import Navigation from "./Navigation";

export const SingleMoviePage = () => {
    const { movieID } = useParams();
    const {
        moviesData,
        handleRemoveWatchList,
        handleWatchList,
        isMovieAvailableInWatchList,
        handleStar,
        handleUnStar,
    } = useContext(MoviesContext);

    const singleMovie = moviesData.find((movie) => +movie.id === +movieID);
    return (
        <div>
            <Navigation />
            <div className="single-movie-wrapper">
                <img
                    className="single-product-img"
                    src={singleMovie?.imageURL}
                    alt={singleMovie?.name}
                />
                <div className="movie-details">
                    <h2>{singleMovie?.title}</h2>
                    <p>{singleMovie?.summary}</p>
                    <p>Year: {singleMovie?.year}</p>
                    <p>Genre: {singleMovie?.genre.map((genre) => genre)}</p>
                    <p>Rating: {singleMovie?.rating}</p>
                    <p>Director: {singleMovie?.director}</p>
                    <p>Writer: {singleMovie?.writer}</p>
                    <p>Cast: {singleMovie?.cast.map((cast) => cast)}</p>
                    {isMovieAvailableInWatchList(singleMovie.id) ? (
                        <button
                            onClick={() => handleRemoveWatchList(singleMovie)}
                            className="add-to-watch-list-btn"
                        >
                            Remove from Watch List
                        </button>
                    ) : (
                        <button
                            onClick={() => handleWatchList(singleMovie)}
                            className="add-to-watch-list-btn"
                        >
                            Add to Watch List
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
