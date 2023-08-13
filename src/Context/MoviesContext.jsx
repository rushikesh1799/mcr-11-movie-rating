import { createContext, useEffect, useState } from "react";
import { movies } from "../DB/Movies";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const storedState = localStorage.getItem("allData");

    const [initialState, setInitialState] = useState(
        storedState
            ? JSON.parse(storedState)
            : {
                  moviesData: movies,
                  starred: [],
                  watchLater: [],
              }
    );

    const [filters, setFilters] = useState({
        genre: "all",
        release_year: "all",
        rating: "all",
        searchedText: "",
    });

    // useEffect(() => {
    //     console.log(filters);
    // }, [filters]);

    useEffect(() => {
        if (storedState) {
            setInitialState(JSON.parse(storedState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("allData", JSON.stringify(initialState));
    }, [initialState]);

    const { moviesData, starred, watchLater } = initialState;

    const handleStar = (movie) => {
        setInitialState((prev) => ({
            ...prev,
            starred: [...prev.starred, movie],
        }));
    };

    const handleUnStar = (movie) => {
        const updatedMoviesArray = starred.filter(
            (currentMovie) => currentMovie.id !== movie.id
        );
        setInitialState((prev) => ({
            ...prev,
            starred: [...updatedMoviesArray],
        }));
    };

    const handleWatchList = (movie) => {
        setInitialState((prev) => ({
            ...prev,
            watchLater: [...prev.watchLater, movie],
        }));
    };

    const handleRemoveWatchList = (movie) => {
        const updatedMoviesArray = watchLater.filter(
            (currentMovie) => currentMovie.id !== movie.id
        );
        setInitialState((prev) => ({
            ...prev,
            watchLater: [...updatedMoviesArray],
        }));
    };

    const isMovieAvailableInStarred = (movieID) =>
        starred.map((movie) => movie.id).includes(movieID);

    const isMovieAvailableInWatchList = (movieID) =>
        watchLater.map((movie) => movie.id).includes(movieID);

    const addNewMovie = (movieDetails) => {
        // const allMoviesData = JSON.parse(localStorage.getItem("allMoviesData"));
        // allMoviesData.push({ ...movieDetails });
        setInitialState((prev) => ({
            ...prev,
            moviesData: [...prev.moviesData, { ...movieDetails }],
        }));
        // localStorage.setItem("allMoviesData", JSON.stringify(allMoviesData));
        // setMoviesList((prev) => [...prev, { ...movieDetails }]);
    };

    return (
        <MoviesContext.Provider
            value={{
                initialState,
                moviesData,
                starred,
                watchLater,
                filters,
                handleStar,
                handleUnStar,
                isMovieAvailableInStarred,
                setFilters,
                addNewMovie,
                handleWatchList,
                handleRemoveWatchList,
                isMovieAvailableInWatchList,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};
