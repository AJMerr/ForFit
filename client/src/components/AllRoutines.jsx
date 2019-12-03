import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class AllRoutines extends Component {

    state = {
        error: '',
        allRoutines: []
    }

    componentDidMount() {
        this.fetchRoutines()
    }

    fetchRoutines = async () => {
        try {
            const res = await axios.get("api/v1/routine")
            this.setState({ allRoutines: res.data })
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    render() {
        return (
            <div>
                <h1 class="center-align"> All Routines </h1>
                {this.state.allRoutines.map((routine) => {
                    return (
                        <div class="container">
                            <div class="row">
                                <div class="col s12 m6">
                                    <div class="card red darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title"> {routine.name} </span>
                                            <p> {routine.week} </p>
                                        </div>
                                        <div class="card-action">
                                            <Link to={`/routine/${routine.id}`}>See Routine</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button class="waves-effect waves-light btn red">
                    <Link to={`/newroutine`}>
                        Create Routine 
                    </Link>
                </button>
            </div>
        )
    }
}
