import React, { useContext } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
    const {
        isMovieAvailableInStarred,
        handleStar,
        handleUnStar,
        handleWatchList,
        handleRemoveWatchList,
        isMovieAvailableInWatchList,
    } = useContext(MoviesContext);

    const navigate = useNavigate();

    return (
        <div className="movie_card" key={movie.id}>
            <img
                src={movie.imageURL}
                alt={movie.title}
                className="movie_img"
                onClick={() => navigate(`/movies/${movie.id}`)}
            />
            <div className="movie_info">
                <h1 onClick={() => navigate(`/movies/${movie.id}`)}>
                    {movie.title}
                </h1>
                <p onClick={() => navigate(`/movies/${movie.id}`)}>
                    {movie.summary}
                </p>
                <div className="movie_card_btns">
                    <div>
                        {isMovieAvailableInStarred(movie.id) ? (
                            <button
                                className="btn"
                                onClick={() => handleUnStar(movie)}
                            >
                                Unstar
                            </button>
                        ) : (
                            <button
                                className="btn"
                                onClick={() => handleStar(movie)}
                            >
                                Star
                            </button>
                        )}
                    </div>
                    <div>
                        {isMovieAvailableInWatchList(movie.id) ? (
                            <button
                                className="btn"
                                onClick={() => handleRemoveWatchList(movie)}
                            >
                                Remove from Watchlist
                            </button>
                        ) : (
                            <button
                                className="btn"
                                onClick={() => handleWatchList(movie)}
                            >
                                Add to Watchlist
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
