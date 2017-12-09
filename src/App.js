import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.js';
import Saved from './Saved.js';

class App extends Component {
    constructor(props) {
        super(props)  
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
           deadline: 'December 25, 2017',
           newDeadline: ''
        }
    }

    handleSubmit() {
        this.setState({deadline: this.state.newDeadline})
    }

    render () {
    return (
    <div>        
        <div className="app">
            <h1 className="title "> Countdown to {this.state.deadline} </h1> 
            <div className="times"> 
                <Clock passingDate={this.state.deadline} />
            </div>
            <input onChange={e => this.setState({newDeadline: e.target.value})} className="input" placeholder="December 25, 2017"/>
            <span type="submit" className="submit" onClick={this.handleSubmit}> Submit </span> 
        </div>
        <div className="well">
            <Saved/>
        </div>
    </div>
    )
}
}

export default App;