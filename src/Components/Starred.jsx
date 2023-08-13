import React, { useContext } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import MovieCard from "./MovieCard";
import Navigation from "./Navigation";

const Starred = () => {
    const { starred } = useContext(MoviesContext);

    return (
        <div>
            <Navigation />
            <div className="movies_wrapper">
                {starred.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
};

export default Starred;
