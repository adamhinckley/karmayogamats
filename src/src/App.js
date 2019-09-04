import React, { Component } from 'react';
import './components/App/App.sass';
import route from './route';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/" ></Link> { /* routes to Home */ }
        <Link to="/register" ></Link>
        <Link to="/login" ></Link> 
        <Link to="/checkout" ></Link>
        <Link to="/build" ></Link>
        <Link to="/view-saved" ></Link>
        <Link to="/manage" ></Link>  
        <Link to="/ResetPass"></Link>
          { route }
      </div>
    );
  }
}

export default App;