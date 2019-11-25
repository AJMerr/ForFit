import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllRoutines extends Component {

    state = {
        allRoutines: []
    }

    componentDidMount() {
        axios.get('api/v1/routine')
        .then((res) => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
