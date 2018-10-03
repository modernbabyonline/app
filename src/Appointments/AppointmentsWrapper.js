import React, { Component } from 'react';
import Appointments from './Appointments';
import { appointStateData } from '../State/state';



export default class AppointmentsWrapper extends Component {
  render(){
    let id = this.props.match.params.id;

    return <div style={{textAlign: "center", display: "inline-block", width: "80%"}}>
      {appointStateData.get(state => <Appointments appID={id} state={state}/>)}
    </div>
  }
}
