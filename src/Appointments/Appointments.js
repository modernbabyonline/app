import React, { Component } from 'react';
import axios from 'axios';
import AppointmentFields from './AppointmentFields';
import { appointStateData } from '../State/state';



export default class Appointments extends Component {
  constructor(props){
    super(props);
    console.log(this.props.appID)
    this.state = {appointData: {}};
    this.submitAppointmentChanges = this.submitAppointmentChanges.bind(this);
  }

  componentDidMount(){
    let that = this;
    let appointID = this.props.appID;
    axios.get('https://api.modernbaby.online/appointments/'+appointID, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
    .then(function (response) {
    console.log(response.data);
      that.setState({appointData: response.data});
    console.log(that.state)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  submitAppointmentChanges(){
  }

  render(){
    return <div style={{textAlign: "center", display: "inline-block", width: "80%"}}>
      {/* { this.props.match.params.id }
      <br/> */}
      <br/>
      <div style={{width: "30%", display: "inline-block", margin: "10px"}}>
        {appointStateData.get(state => <AppointmentFields label={"Type"} type={"dropdown"} options={["Intake","Followup"]} state={state}/>)}
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px"}}>
        {appointStateData.get(state => <AppointmentFields label={"Volunteer"} type={"text"}  state={state}/>)}
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px"}}>
        {appointStateData.get(state => <AppointmentFields label={"DateTime"} type={"text"}  state={state}/>)}
      </div>
      <h3>Items Taken</h3>
      <br/>
      <div style={{width: "30%", display: "inline-block", margin: "10px", "textAlign": "center"}}>
        <div style={{display: "inline-block", "textAlign": "left"}}>
          {appointStateData.get(state => <AppointmentFields label={"Crib"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Bassient"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Pack N Play"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Single stroller"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Double stroller"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Front carrier"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Bouncy chair"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Swing"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Exercauser"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        </div>
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px", "textAlign": "center"}}>
        <div style={{display: "inline-block", "textAlign": "left"}}>
          {appointStateData.get(state => <AppointmentFields label={"Jolly jumper"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Bumbo"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"High chair"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Bathtub"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Diapers"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Diaper Bag"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Blankets"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Crib bedding"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
          <br/>
          {appointStateData.get(state => <AppointmentFields label={"Sleepsacks"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        </div>
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px",  "textAlign": "center"}}>
        <div style={{display: "inline-block", "textAlign": "left"}}>
        {appointStateData.get(state => <AppointmentFields label={"Clothing"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Toys/books"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Nursing pillow"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Safety gate"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Bottles"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Feeding accessories"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Monitor"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Safety gear"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        <br/>
        {appointStateData.get(state => <AppointmentFields label={"Breast pump"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={state}/>)}
        </div>
      </div>
      <br/>
      <button style={{marginTop: "40px"}} className="submitBtn"
        onClick={this.submitAppointmentChanges}>Edit
      </button>
    </div>
  }
}
