import React, { Component } from 'react';
import '../../styles/index.css';

class Home extends Component {
  render() {
    return (
      <div className="container col justify-content-center">
        <h3>Bill Murray</h3>
        <p>This is a website about the work of the fantastic Bill Murray.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Bill_Murray%2C_Monuments_Men_premiere.jpg" alt=""/>
      </div>
    );
  }
}

export default Home;
