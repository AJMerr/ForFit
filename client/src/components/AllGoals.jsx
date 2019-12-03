import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class AllGoals extends Component {

    state = {
        error: '',
        allGoals: []
    }

    componentDidMount() {
        this.fetchAllGoals()
    }

    fetchAllGoals = async () => {
        try {
            const res = await axios.get("/api/v1/goal")
            this.setState({ allGoals: res.data })
        }
        catch (error) {
            console.log(error)
            this.setState({ error: error.message })
        }
    }

    render() {
        return (
            <div>
                <h1> All Goals </h1>
                {this.state.allGoals.map((goals) => {
                    return (
                        <div class="container">
                            <div class="row">
                                <div class="col s12 m6">
                                    <div class="card red darken-1">
                                        <div class="card-content white-text">
                                            <span class="card-title"> {goals.name} </span>
                                            <p> {goals.start_weight} </p>
                                            <p> {goals.current_weight} </p>
                                            <p> {goals.end_weight} </p>
                                        </div>
                                        <div class="card-action">
                                        <Link to={`/goal/${goals.id}`}>See Goal</Link>
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
