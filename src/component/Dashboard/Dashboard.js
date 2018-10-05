import React, {Component} from 'react'
import House from './../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        axios.get('/api/houses').then( response => {
            this.setState({houses: response.data})
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses:${id}`).then( response => {
            this.setState({houses: response.data})
        })
    }



    render() {
        let displayHouses = this.state.houses.map((house, i) => {
            return (
                <House key={i} house={house}/>
            )})

      return (
            <div>
                <h2>Dashboard</h2>
                
                <Link to='/wizard'><button className='btn'>Add New Property</button></Link>
                {displayHouses}

            </div>
        
        )
    }    
}