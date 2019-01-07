import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'
import Greeting from './Greeting';
import CounterBox from './CounterBox';
import Box from './Box';
import Product from './Product';
import Employee from './Employee';
import A from './A';

class App extends Component {

  constructor(props) {
    super(props)
    //console.log(props);  
    this.state = {
      message: 'greetings',
    }
    console.log("App::constructor");
  }

  changeMessage(message) {
    this.setState({ message }) // change comp's state
  }

  render() {
    console.log("App::render");
    // let title = this.props.title;
    // let trainer = this.props.title;
    //or
    let { title, trainer } = this.props;
    let { message } = this.state;
    //this.props.trainer="New Trainer" // Error ,inp-note:component cannot mutate props, 
    return (
      <div className="container">
        <hr />
        <h1> {title} : by &nbsp;
        <span className="badge badge-dark">{trainer}</span></h1>
        <hr />

        <A value={100} />
        <hr />
        <A value={200} />

        

        <hr />
        <Box>
          <Product />
          <Product />
        </Box>
        <Box>
          <Employee />
          <Employee />
        </Box>
        <hr />
        <CounterBox />
        <hr />
        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">Remove</button>&nbsp;

        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    );
  }

  componentDidCatch() {
    //..
  }

  componentDidMount() {
    console.log("App::componentDidMount");

    // n/w request

    setTimeout(() => {
      //let serverMessage = "Hello! from server"
      //this.setState({ message: serverMessage })
    }, 2000);

  }
}

App.propTypes = {
  title: PropTypes.string,
  trainer: PropTypes.string.isRequired
};
App.defaultProps = {
  title: 'react-api'
}

export default App;
