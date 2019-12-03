import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleWorkout extends Component {

    state = {
        singleWorkout: {
            name: '',
            day: '',
            description: '',
            sets: 0,
            reps: 0
        }
    }

    componentDidMount() {
        this.fetchSingleWorkout()
    }

    fetchSingleWorkout = async () => {
        try {
            const res = await axios.get(`/api/v1/workout/${this.props.match.params.id}`)
            this.setState({ singleWorkout: res.data })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <h1 class="center-align"> {this.state.singleWorkout.name} </h1>
                    <div class="col s12 m6">
                        <div class="card red darken-1">
                            <div class="card-content white-text">
                                <span class="card-title"> {this.state.singleWorkout.name} </span>
                                <p> {this.state.singleWorkout.day} </p>
                                <p> {this.state.singleWorkout.sets} </p>
                                <p> {this.state.singleWorkout.reps} </p>
                                <p> {this.state.singleWorkout.description} </p>
                            </div>
                            <div class="card-action">
                                <Link to={`/`}>Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
