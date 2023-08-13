import React, { useContext } from "react";
import { AddNewMovieModal } from "./AddNewMovieModal";
import { MoviesContext } from "../Context/MoviesContext";

const Header = () => {
    const { moviesData, setFilters } = useContext(MoviesContext);

    const uniqueGenres = [
        ...new Set(
            moviesData.reduce((acc, curr) => [...acc, ...curr.genre], [])
        ),
    ];
    const uniqueYears = [
        ...new Set(moviesData.reduce((acc, curr) => [...acc, curr.year], [])),
    ];

    // console.log(uniqueYears);

    return (
        <header className="header">
            <p className="header-title">Movies</p>
            <select
                className="select"
                name="genre"
                id="genre"
                onChange={(e) =>
                    setFilters((prev) => ({
                        ...prev,
                        genre: e.target.value,
                    }))
                }
            >
                <option value="all">All Genre</option>
                {uniqueGenres.map((genre) => (
                    <option value={genre.toLowerCase()} key={genre}>
                        {genre}
                    </option>
                ))}
            </select>
            <select
                className="select"
                name="release-year"
                id="release-year"
                onChange={(e) =>
                    setFilters((prev) => ({
                        ...prev,
                        release_year: e.target.value,
                    }))
                }
            >
                <option value="all">All Years</option>
                {uniqueYears.map((year) => (
                    <option value={year} key={year}>
                        {year}
                    </option>
                ))}
            </select>
            <select
                className="select"
                name="rating"
                id="rating"
                onChange={(e) =>
                    setFilters((prev) => ({
                        ...prev,
                        rating: e.target.value,
                    }))
                }
            >
                <option value="all">Select a Rating</option>
                <option value="all">All</option>
                <option value="10">10 Rating</option>
                <option value="9">9 Rating</option>
                <option value="8">8 Rating</option>
                <option value="7">7 Rating</option>
                <option value="6">6 Rating</option>
                <option value="5">5 Rating</option>
                <option value="4">4 Rating</option>
                <option value="3">3 Rating</option>
                <option value="2">2 Rating</option>
                <option value="1">1 Rating</option>
            </select>
            <AddNewMovieModal />
        </header>
    );
};

export default Header;
