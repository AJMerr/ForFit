import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class CreateRoutine extends Component {

    state = {
        newRoutine: {
            name: '',
            week: ''
        }
    }

    changeHandler = (e) => {
        const copyNewRoutine = { ...this.state.newRoutine }
        copyNewRoutine[e.target.name] = e.target.value
        this.setState({ newRoutine: copyNewRoutine })
    }

    createRoutine = (e) => {
        e.preventDefault()
        {
            axios.post("/api/v1/routine/", {
                name: this.state.newRoutine.name,
                week: this.state.newRoutine.week
            })
        }
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <form class="col s12" onSubmit={this.createRoutine}>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="name" type="text" onChange={this.changeHandler} value={this.state.newRoutine.name} name="name"/>
                                <label for="name">Name</label>

                            </div>
                            <div class="input-field col s6">
                                <input id="week" type="text" onChange={this.changeHandler} value={this.state.newRoutine.week} name="week"/>
                                <label for="week">Week</label>

                            </div>
                        </div>
                        <button class="btn waves-effect waves-light" onClick={this.createRoutine}>Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
