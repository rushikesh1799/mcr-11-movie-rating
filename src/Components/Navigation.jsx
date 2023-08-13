import React, { useContext, useState } from "react";

import "./styles.css";
import { NavLink } from "react-router-dom";
import { MoviesContext } from "../Context/MoviesContext";

const Navigation = () => {
    const { filters, setFilters } = useContext(MoviesContext);

    return (
        <nav className="navigation_wrapper">
            <NavLink to="/">IMDB</NavLink>
            <input
                type="text"
                placeholder="search movies by title, cast and director"
                onChange={(e) =>
                    setFilters((prev) => ({
                        ...prev,
                        searchedText: e.target.value,
                    }))
                }
                className="search_input"
            />
            <div className="navbar_right">
                <NavLink to="/">Movies</NavLink>
                <NavLink to="/watch-list">Watch List</NavLink>
                <NavLink to="/starred">Starred Movies</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
