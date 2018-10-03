import React, { Component } from 'react';
import axios from 'axios';
import AppointmentFields from './AppointmentFields';

export default class Appointments extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: "",
      data: null
    };
    this.submitAppointmentChanges = this.submitAppointmentChanges.bind(this);
  }

  componentWillMount() {
    this.setState({ loading: true });
    let appointID = this.props.appID;
    return axios.get('https://api.modernbaby.online/appointments/'+appointID, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
    .then(response => {
      this.setState({ 
        data: response.data,
        loading: false,
        error: false 
      });
    })
    .catch(error => {
      console.error("error: ", error);
      this.setState({
        // objects cannot be used as a react child
        // -> <p>{error}</p> would throw otherwise
        error: `${error}`,
        loading: false
      });
    });
  }

  submitAppointmentChanges(){
  }

  render(){
    const { loading, error, data } = this.state;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return (
        <p>
          There was an error loading the repos.{" "}
          <button onClick={this.loadData}>Try again</button>
        </p>
      );
    }
    return <div style={{textAlign: "center", display: "inline-block", width: "80%"}}>
      {/* { this.props.match.params.id }
      <br/> */}
      <br/>
      <div style={{width: "30%", display: "inline-block", margin: "10px"}}>
        <AppointmentFields label={"Type"} type={"dropdown"} options={["Intake Meeting","Followup Meeting"]} state={data}/>
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px"}}>
        <AppointmentFields label={"Volunteer"} type={"text"}  state={data}/>
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px"}}>
        <AppointmentFields label={"Time"} type={"text"}  state={data}/>
      </div>
      <h3>Items Taken</h3>
      <br/>
      <div style={{width: "30%", display: "inline-block", margin: "10px", "textAlign": "center"}}>
        <div style={{display: "inline-block", "textAlign": "left"}}>
            <AppointmentFields label={"Crib"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Bassient"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Pack N Play"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Single stroller"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Double stroller"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Front carrier"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Bouncy chair"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Swing"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Exercauser"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        </div>
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px", "textAlign": "center"}}>
        <div style={{display: "inline-block", "textAlign": "left"}}>
            <AppointmentFields label={"Jolly jumper"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Bumbo"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"High chair"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Bathtub"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Diapers"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Diaper Bag"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Blankets"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Crib bedding"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
          <br/>
            <AppointmentFields label={"Sleepsacks"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        </div>
      </div>
      <div style={{width: "30%", display: "inline-block", margin: "10px",  "textAlign": "center"}}>
        <div style={{display: "inline-block", "textAlign": "left"}}>
          <AppointmentFields label={"Clothing"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Toys/books"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Nursing pillow"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Safety gate"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Bottles"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Feeding accessories"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Monitor"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Safety gear"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        <br/>
          <AppointmentFields label={"Breast pump"} type={"dropdown"} options={["Requested","Not Requested", "Taken", "Not Available", "No Longer Needed", "Added",  ]} state={data}/>
        </div>
      </div>
      <br/>
      <button style={{marginTop: "40px"}} className="submitBtn"
        onClick={this.submitAppointmentChanges}>Edit
      </button>
    </div>
  }
}
