import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-dom'

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
            this.setState({singleRoutine: res.data, workouts: res.data.workouts})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <h1> {this.state.singleRoutine.name} </h1>
                <p> {this.state.singleRoutine.week} </p>
                    <div>
                        {this.state.singleRoutine.workouts.map(workout => (
                            <div>
                                <p> {workout.name} </p>
                                <p> {workout.sets} </p>
                                <p> {workout.reps} </p>
                                <p> {workout.description} </p>
                            </div>
                        ))}
                    </div> 
            </div>
        )
    }
}
