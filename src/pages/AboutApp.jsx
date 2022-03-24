import React from 'react'
import style from "./style.module.css"

const AboutApp = () =>
{
    return (
        <div className={style.about_app}>
            <h3>About the App</h3>
            <p>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have acces to your todos item.</p>
        </div>
    )
}

export default AboutApp