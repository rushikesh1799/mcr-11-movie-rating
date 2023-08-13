import React, { useContext } from "react";
import Navigation from "./Navigation";
import { MoviesContext } from "../Context/MoviesContext";
import MovieCard from "./MovieCard";
import Header from "./Header";

const Home = () => {
    const { moviesData, handleStar, filters } = useContext(MoviesContext);

    const moviesByGenres =
        filters.genre === "all"
            ? moviesData
            : moviesData.filter((movie) => {
                  const moviesGenres = movie.genre.map((genre) =>
                      genre.toLowerCase()
                  );
                  console.log("moviesGenres", moviesGenres);
                  console.log(moviesGenres.includes(filters.genre));
                  return moviesGenres.includes(filters.genre);
              });

    const moviesByYear =
        filters.release_year === "all"
            ? moviesByGenres
            : moviesByGenres.filter(
                  (movie) => movie.year === Number(filters.release_year)
              );
    const moviesByRating =
        filters.rating === "all"
            ? moviesByYear
            : moviesByYear.filter(
                  (movie) => movie.rating === Number(filters.rating)
              );

    const moviesBySearch =
        filters.searchedText === ""
            ? moviesByRating
            : moviesByRating.filter(
                  (movie) =>
                      movie.title
                          .toLowerCase()
                          .includes(filters.searchedText.toLowerCase()) ||
                      movie.director
                          .toLowerCase()
                          .includes(filters.searchedText.toLowerCase()) ||
                      movie.cast
                          .toString()
                          .toLowerCase()
                          .includes(filters.searchedText.toLowerCase())
              );

    return (
        <div>
            <Navigation />
            <Header />
            <div className="movies_wrapper">
                {moviesBySearch.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
};

export default Home;
