import React, { Component } from 'react'
import axios from 'axios'

export default class AllWorkouts extends Component {

    state = {
        error: '',
        allWorkouts: []
    }

    componentDidMount () {
        this.fetchAllWorkouts()
    }

    fetchAllWorkouts = async () => {
        try {
            const res = await axios.get("/api/v1/workout")
            this.setState({allWorkouts: res.data})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <h1> All Workouts </h1>
                {this.state.allWorkouts.map((workout) => {
                    return (
                        <div>
                            <p> {workout.day} </p>
                            <p> {workout.name} </p>
                            <p> {workout.sets} </p>
                            <p> {workout.reps} </p>
                            <p> {workout.description} </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
