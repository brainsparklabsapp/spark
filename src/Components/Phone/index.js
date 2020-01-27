import React, { Component } from 'react';
import './Phone.css';

class Phone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      app: "",
      page: 1
    };
  }

  render() {
    return (<img className="phone" alt={this.props.app} src={"/static/images/" + this.props.app + "TwoScreens.png"} />);
  }
}

export default Phone;
