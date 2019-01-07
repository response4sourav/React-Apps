"use strict"

import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/*
    <div class="alert alert-info">
        <p>Good Evening</p>
        <p>10.12PM</p>
    </div>
*/

//------------------------------------------------
// step-1: define component class
//------------------------------------------------

/* 

class Greeting extends Component {
    render() {
        let p1 = React.createElement('p', { key: 1 }, 'Good Evening')
        let p2 = React.createElement('p', { key: 2 }, '10.15 PM')
        let divEle = React.createElement('div', { className: 'alert alert-info' }, [p1, p2])
        return divEle
    }
} 
*/

//  JSX syntax

class Greeting extends Component {
    render() {
        return (
            <div className="alert alert-info">
                <p>{this.props.message}</p>
                <hr/>
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        )
    }
}

//------------------------------------------------


//------------------------------------------------
// step-2: instantiate component & render to 'virtual-DOM'
//------------------------------------------------

// let greeting = React.createElement(Greeting, {message:'Hello World'}, null);
//or
let greeting = <Greeting message="Hello World"/>

ReactDOM.render(greeting, document.getElementById('root'))