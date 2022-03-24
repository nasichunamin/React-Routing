import React from 'react'
import { NavLink } from 'react-router-dom'
import gambar from "../assets/img/notfound.png"
import style from "./style.module.css"

const NotFoundPage = () =>
{
    return (
        <div className={style.bg_content}>
            <div className="container">
                <div className="row justify-content-center align-content-center align-items-center ">
                    <div className="col-4 center">
                        <img src={gambar} className={style.gambar}/>
                        <h1 className="display-6 fw-bold pb-4">Oops! Something went wrong!</h1>
                        <NavLink className={style.btn_notfound} to='/'>RETURN TO HOME</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage