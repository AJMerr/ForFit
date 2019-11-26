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
            this.setState({singleGoal: res.data})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
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
        )
    }
}
