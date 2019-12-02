import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class CreateWorkout extends Component {

    state = {
        newWorkout: {
            name: '',
            day: '',
            description: '',
            sets: 0,
            reps: 0,
            routine: ''
        }
    }

    changeHandler = (e) => {
        const copyNewWorkout = { ...this.state.newWorkout }
        copyNewWorkout[e.target.name] = e.target.value
        this.setState({ newWorkout: copyNewWorkout })
    }

    createWorkout = (e) => {
        e.preventDefault()
        {
            axios.post("/api/v1/workout/", {
                name: this.state.newWorkout.name,
                day: this.state.newWorkout.day,
                description: this.state.newWorkout.description,
                sets: this.state.newWorkout.sets,
                reps: this.state.newWorkout.reps,
                routine: this.props.match.params.workoutid
            })
        }
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <form class="col s12" onSubmit={this.createWorkout}>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="name" type="text" onChange={this.changeHandler} value={this.state.newWorkout.name} name="name" />
                                    <label for="name">Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="day" type="text" onChange={this.changeHandler} value={this.state.newWorkout.day} name="day" />
                                    <label for="day">Day</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="sets" type="number" onChange={this.changeHandler} value={this.state.newWorkout.sets} name="sets" />
                                    <label for="sets">Sets</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="reps" type="number" onChange={this.changeHandler} value={this.state.newWorkout.reps} name="reps" />
                                    <label for="reps">Reps</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="description" type="text" onChange={this.changeHandler} value={this.state.newWorkout.description} name="description" />
                                    <label for="description">Description</label>
                                </div>
                            </div>
                            <button class="btn waves-effect waves-light" onClick={this.createWorkout}>Submit
                            <i class="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
