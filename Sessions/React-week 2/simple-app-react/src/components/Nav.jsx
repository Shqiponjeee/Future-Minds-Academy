import React from "react";


export default function Nav() {

    return (

        <div>

            <header className="row align-center">
                <div className="col">
                    <nav className="navbar gap-2">
                        <h2>Logo</h2>
                        <ul className="navbar-menu remove-tablet">
                            <li><a href="spring.html">Spring</a></li>
                            <li><a href="summer.html">Summer</a></li>
                            <li><a className="active" href="fall.html">Fall</a></li>
                            <li><a href="winter.html">Winter</a></li>
                            <li><button className="btn">All Seasons</button></li>
                        </ul>
                    </nav>
                </div>
            </header>


        </div>

    );
}