import React from "react";
import "./NavPage.css";
import {BrowserRouter as Router, Link} from "react-router-dom";

const NavPage = () => {
    return (
        <div>
            <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox"/>
            <label htmlFor="page-nav-toggle">
                <svg className="icon--menu-toggle" viewBox="0 0 60 30">
                    <g className="icon-group">
                        <g className="icon--menu">
                            <path d="M 6 0 L 54 0"/>
                            <path d="M 6 15 L 54 15"/>
                            <path d="M 6 30 L 54 30"/>
                        </g>
                        <g className="icon--close">
                            <path d="M 15 0 L 45 30"/>
                            <path d="M 15 30 L 45 0"/>
                        </g>
                    </g>
                </svg>
            </label>

            <Router>
                <nav className="main-navigation">
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="/intro">Введение</a></li>
                        <li><a href="/concept">Понятие настольная издательская система</a></li>
                        <li><a href="/opportunities">Возможности издательских систем и их история</a></li>
                        <li><a href="/systems">Системы верстки электронных документов</a></li>
                        <li><a href="/analiz">Анализ программных сред</a></li>
                        <li><a href="/conclusion">Заключение</a></li>
                    </ul>
                </nav>
            </Router>

        </div>
    )
}

export default NavPage;