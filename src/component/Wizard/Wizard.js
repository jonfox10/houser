import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Wizard extends Component {
    constructor(){
        super()
        
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0,
        }
    }

    handleComplete(){
        const { text } = this.state;
        axios.post('/api/houses', {text}).then( response => {
                this.setState({ name: "",
                                address: "",
                                city: "",
                                state: "",
                                zip: 0,})
                
            });
    }
    

    handleName(value){
        this.setState({name: value})
    }
    handleAddress(value){
        this.setState({address: value})
    }
    handleCity(value){
        this.setState({city: value})
    }
    handleState(value){
        this.setState({state: value})
    }
    handleZip(value){
        this.setState({zip: value})
    }

    render() {

      return (
          <div>
            <h2>Wizard</h2>
            <Link to='/'><button className='btn'>Cancel</button></Link>
            <input onChange={(e) => this.handleName(e.target.value)} placeholder='name' type='text' />
            <input onChange={(e) => this.handleAddress(e.target.value)} placeholder='address' type='text' />
            <input onChange={(e) => this.handleCity(e.target.value)} placeholder='city' type='text' />
            <input onChange={(e) => this.handleState(e.target.value)} placeholder='state' type='text' />
            <input onChange={(e) => this.handleZip(e.target.value)} placeholder='zip' type='text' />
            <button onClick={this.handleComplete}>Complete</button>
          </div>
      )

    }    
}