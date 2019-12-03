import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class AllWorkouts extends Component {

    state = {
        error: '',
        allWorkouts: []
    }

    componentDidMount() {
        this.fetchAllWorkouts()
    }

    fetchAllWorkouts = async () => {
        try {
            const res = await axios.get("/api/v1/workout")
            this.setState({ allWorkouts: res.data })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <h1 class="center-align"> All Workouts </h1>
                {this.state.allWorkouts.map((workout) => {
                    return (
                        <div class="container">
                            <div class="row">
                                <div class="col s12 m6">
                                    <div class="card red darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title"> {workout.name} </span>
                                            <p> {workout.day} </p>
                                            <p> {workout.sets} </p>
                                            <p> {workout.reps} </p>
                                            <p> {workout.description} </p>
                                        </div>
                                        <div class="card-action">
                                        <Link to={`/workouts/${workout.id}`}>See Workout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
