import { useContext, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import "./App.css";
import { MoviesContext } from "./Context/MoviesContext";
import Home from "./Components/Home";
import Starred from "./Components/Starred";
import WatchList from "./Components/WatchList";
import { SingleMoviePage } from "./Components/SingleMoviePage";

function App() {
    const { moviesData } = useContext(MoviesContext);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/watch-list" element={<WatchList />}></Route>
                <Route path="/starred" element={<Starred />}></Route>

                <Route
                    path="/movies/:movieID"
                    element={<SingleMoviePage />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
