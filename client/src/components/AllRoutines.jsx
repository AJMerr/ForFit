import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllRoutines extends Component {

    state = {
        error: "",
        allRoutines: []
    }

    componentDidMount() {
        this.fetchRoutines()
    }

    fetchRoutines = async () => {
        try {
            const res = await axios.get("api/v1/routine")
            this.setState({allRoutines: res.data})
        }
        catch (err) {
            console.log(err)
            this.setState({error: err.message})
        }
    }

    render() {
        return (
            <div>
                <h1> All Routines </h1>
                {this.state.allRoutines.map((routine) =>{
                    return(
                        <div> {routine.name} </div>
                    )
                })}
            </div>
        )
    }
}
