import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';



export default class ClientDetails extends Component {

  constructor(props){
    super(props);
    this.mapResults = this.mapResults.bind(this);
    this.approval = this.approval.bind(this);
    this.approvalClick = this.approvalClick.bind(this);
    this.getAppointmentDetails = this.getAppointmentDetails.bind(this);
    // this.listAppointments = this.listAppointments.bind(this);
    console.log(this.props.match.params.id)

    this.state = {
      searchRes: [],
      appointmentsData: []
      // searchRes: [{ID: "gdfgdfgdfgd", AppointmentsIDs: ["dsfdsfsdfsdfs", "ffsdghethfhgf"], DemographicInfo: {}}]

    }
    console.log(this.state)
  }

  componentDidMount(){
    let that = this;
    let clientIDParam = this.props.match.params.id;
    axios.get('https://api.modernbaby.online/clients/'+clientIDParam)
    .then(function (response) {
      console.log(response.data);
      if(response.data.length > 0){
        that.setState({searchRes: response.data});
        that.getAppointmentDetails();
      }
      console.log(that.state)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  getAppointmentDetails(){
      let that = this;
      let clientIDParam = this.props.match.params.id;
      axios.get('https://api.modernbaby.online/appointments?clientid='+clientIDParam)
      .then(function (response) {
        console.log(response.data);
        if(response.data.length > 0){
          that.setState({appointmentsData: response.data});
        }
        console.log(that.state)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchRes: nextProps.searchRes });
  }

  listAppointments(){
    console.log("Listing appointments")
    console.log(this.state.appointmentsData)
    let count = 0;
      return this.state.appointmentsData.map((app)=>{
        console.log(app)
        count++;
        return (<div >
          <a key={app} href={"/appointmentData/" + app.ID} > {"Appointment " + count} </a>
        </div>)
      })
  }

  approval(data){
    console.log(data)
    if(data.status === "PENDING"){
        return(
          <button className="submitBtn"
            onClick={this.approvalClick}
            value={data.id}            >
            Approve
          </button>
        )
    }else{
      return;
    }
  }

  approvalClick(e){
    let that = this;
    console.log(e.target.value)
    axios.put('https://api.modernbaby.online/clients/' + e.target.value, JSON.stringify({status: "APPROVED"}))
  .then(function (response) {
    console.log(response);
    let clientIDParam = that.props.match.params.id;
    axios.get('https://api.modernbaby.online/clients/'+clientIDParam)
    .then(function (response) {
      console.log(response.data);
      swal({title:"Client Approved"});
      if(response.data.length > 0){
        that.setState({searchRes: response.data});
        that.getAppointmentDetails();
      }
      console.log(that.state)
    })
    .catch(function (error) {
      console.log(error);
    });
  })
  .catch(function (error) {
    swal({title:"Error approving client"});
    console.log(error);
  });
  }

  mapResults(){
    if(this.state.searchRes.length < 1){
      return <div></div>
    }
    console.log(this.state.searchRes)
    return this.state.searchRes.map((userData)=>
      <div key={userData.ID} style={{margin: "10px"}}>
          <h1>{userData.ClientName}</h1>
        <h4>
          {userData.ClientEmail}
          <br/>
          {userData.ClientPhone}
        </h4>
        <br/>
          <div style={{width: "45%", float: "left", position: "relative", margin: "10px"}}>
            Client Date of Birth: {userData.ClientDOB}
            <br/>
            Baby Date of Birth: {userData.BabyDOB}
            <br/>
            Client Income: {userData.ClientIncome}
            <br/>
            Agency Name: {userData.AgencyName}
            <br/>
            Referrer Name: {userData.ReferrerName}
            <br/>
            Referrer Email: {userData.ReferrerEmail}
            <br/>
          </div>
          <div style={{width: "45%", display: "inline-block", position: "relative", margin: "10px"}}>
            Child with special needs: {userData.DemographicInfo.childWithSpecialNeeds.toString()}
            <br/>
            Homeless: {userData.DemographicInfo.homeless.toString()}
            <br/>
            New to Canada: {userData.DemographicInfo.newToCanada.toString()}
            <br/>
            Under 19 Years Old: {userData.DemographicInfo.under19.toString()}
            <br/>
            Unemployed: {userData.DemographicInfo.unemployed.toString()}
            <br/>
            Other Demographic Info: {userData.DemographicOther}
            <br/>
          </div>
        <br/>
        <br/>
          <div style={{display: "inline-block", position: "relative", margin: "10px"}}>
            Appointments: {this.listAppointments()}<br/>
            Status: {userData.Status}
          </div>

        <br/>
        {this.approval({id: userData.ID, status: userData.Status})}
        <br/>
        <br/>

      </div>
    )
  }

  render() {
    return (
      <div style={{textAlign: "center", margin: "10px"}}>
        <br/>
        <br/>

        {this.mapResults()}
      </div>
    )
  }
}
