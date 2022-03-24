import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import AboutApp from "../pages/AboutApp";
import AboutAuthor from "../pages/AboutAuthor";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='about' element={<About />} />
            <Route exact path='about-app' element={<AboutApp />} />
            <Route exact path='about-author' element={<AboutAuthor />} />
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    )
}

export default Router