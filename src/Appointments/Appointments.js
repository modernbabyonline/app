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

  submitAppointmentChanges(){
    // axios.put('http://s8o2g6emc6.execute-api.ca-central-1.amazonaws.com/staging/search?' + data.searchField + '=' + data.searchTerm)
    // .then(function (response) {
    //   that.state = {searchRes: []};
    //   if(response.data.length > 0){
    //     that.setState({searchRes: that.state.searchRes.concat(response.data)});
    //   }
    //   that.setState({searchRes: response.data});
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  render(){
    return <div style={{textAlign: "center", display: "inline-block", width: "80%"}}>
      {/* { this.props.match.params.id }
      <br/> */}
      <br/>

      {appointStateData.get(state => <AppointmentFields label={"Type"} type={"dropdown"} options={["Intake","Followup"]} state={state}/>)}
      <br/>
      {appointStateData.get(state => <AppointmentFields label={"Volunteer"} type={"text"}  state={state}/>)}
      <br/>
      {appointStateData.get(state => <AppointmentFields label={"DateTime"} type={"text"}  state={state}/>)}
      <br/>
      <h3>Items Taken</h3>
      <br/>
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
      <br/>
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
      <br/>
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
      <br/>
      <button className="submitBtn"
        onClick={this.submitAppointmentChanges}>Edit
      </button>
    </div>
  }
}
