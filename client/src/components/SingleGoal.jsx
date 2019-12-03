import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class SingleGoal extends Component {

    state = {
        singleGoal: {
            name: '',
            start_weight: 0,
            current_weight: 0,
            end_weight: 0
        }
    }

    componentDidMount() {
        this.fetchSingleGoal()
    }

    fetchSingleGoal = async () => {
        try {
            const res = await axios.get(`/api/v1/goal/${this.props.match.params.id}`)
            this.setState({ singleGoal: res.data })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.singleGoal.name} </h1>
                <p> {this.state.singleGoal.start_weight} </p>
                <p> {this.state.singleGoal.current_weight} </p>
                <o> {this.state.singleGoal.end_weight} </o>
            </div>
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
        )
    }
}
