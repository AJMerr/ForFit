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

            <div class="container">
                <div class="row">
                    <h1 class="center-align"> Your Goals </h1>
                    <div class="col s12 m6">
                        <div class="card red darken-1">
                            <div class="card-content white-text">
                                <span class="card-title"> {this.state.singleGoal.name} </span>
                                <p> {this.state.singleGoal.start_weight} </p>
                                <p> {this.state.singleGoal.current_weight} </p>
                                <p> {this.state.singleGoal.end_weight} </p>
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
