import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class SingleRoutine extends Component {

    state = {
        singleRoutine: {
            name: '',
            week: '',
            workouts: [],
        }
    }

    componentDidMount() {
        this.fetchSingleRoutine()
    }

    fetchSingleRoutine = async () => {
        try {
            const res = await axios.get(`/api/v1/routine/${this.props.match.params.id}`)
            this.setState({ singleRoutine: res.data, workouts: res.data.workouts })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <h1 class="center-align"> {this.state.singleRoutine.name} </h1>
                <p class="center-align" > {this.state.singleRoutine.week} </p>
                <div>
                    {this.state.singleRoutine.workouts.map(workout => (
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
                                            <Link to={`/`}>Home</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        )
    }
}
