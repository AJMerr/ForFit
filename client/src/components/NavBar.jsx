import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'

export default class NavBar extends Component {


    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href ="/"> Home </a></li>
                            <li><a href="./workouts"> Workouts </a></li>
                            <li><a href="./goal"> Goals </a></li>
                        </ul>
                        <ul class="side-nav" id="mobile-demo" class= "left hide-on-large-only">
                            <li><a href ="/"> Home </a></li>
                            <li><a href="./workouts"> Workouts </a></li>
                            <li><a href="./goal"> Goals </a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
