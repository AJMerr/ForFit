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
        this.setState({singleWorkout: res.data})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.singleWorkout.name} </h1>
                <p> {this.state.singleWorkout.day} </p>
                <p> {this.state.singleWorkout.sets} </p>
                <p> {this.state.singleWorkout.reps} </p>
                <p> {this.state.singleWorkout.description} </p>
            </div>
        )
    }
}
