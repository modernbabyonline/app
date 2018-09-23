import React, { Component } from 'react';
import axios from 'axios';


export default class Appointments extends Component {
  constructor(props){
    super(props);
    console.log(this.props.match.params.id)
    this.state = {appointData: {}};
  }

  componentDidMount(){
    let that = this;
    let appointID = this.props.match.params.id;
    axios.get('TEMP_URL')
    .then(function (response) {
    console.log(response.data);
      that.setState({appointData: response.data});
    console.log(that.state)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return <div></div>
  }
}
