import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({author, app}) => {
    let history = useNavigate();
    function handleClick(){
        history.push("/");
        history.push("/about");
        history.push("/about-app");
        history.push("/about-author");
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        < li className="nav-item" >
                            <NavLink className="nav-link" onClick={ handleClick } aria-current="page" to='/'>Home</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={ handleClick } to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={ handleClick } to='/about-app'>About App{ app }</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" onClick={ handleClick } to='/about-author'>About Author{ author }</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar