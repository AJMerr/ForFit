import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class CreateGoal extends Component {

    state = {
        newGoal: {
            name: '',
            start_weight: 0,
            current_weight: 0,
            end_weight: 0
        }
    }

    changeHandler = (e) => {
        const copyNewGoal = { ...this.state.newGoal }
        copyNewGoal[e.target.name] = e.target.value
        this.setState({ newGoal: copyNewGoal })
    }

    createGoal = (e) => {
        e.preventDefault()
        {
            axios.post("/api/v1/goal/", {
                name: this.state.newGoal.name,
                start_weight: this.state.newGoal.start_weight,
                current_weght: this.state.newGoal.current_weght,
                end_weight: this.state.newGoal.end_weight
            })
        }
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <form class="col s12" onSubmit={this.createGoal}>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="name" type="text" onChange={this.changeHandler} value={this.state.newGoal.name} name="name" />
                                    <label for="name">Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="start_weight" type="number" onChange={this.changeHandler} value={this.state.newGoal.start_weight} name="start_weight" />
                                    <label for="start_weight">Start Weight</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="current_weight" type="number" onChange={this.changeHandler} value={this.state.newGoal.current_weight} name="current_weight" />
                                    <label for="current_weight">Current Weight</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="end_weight" type="number" onChange={this.changeHandler} value={this.state.newGoal.end_weight} name="end_weight" />
                                    <label for="end_weight">End Weight</label>
                                </div>
                            </div>
                            <button class="btn waves-effect waves-light" onClick={this.createRoutine}>Submit
                            <i class="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
