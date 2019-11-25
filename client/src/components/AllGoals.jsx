import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
            this.setState({allGoals: res.data})
        }
        catch (error) {
            console.log(error)
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div>
                <h1> All Goals </h1>
                {this.state.allGoals.map((goals) => {
                    return (
                        <div>
                            <p>{goals.name}</p>
                            <p> {goals.start_weight} </p>
                            <p> {goals.current_weight} </p>
                            <p> {goals.end_weight} </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
