import React, { Component } from 'react';
import axios from 'axios';
// import { Button } from 'semantic-ui-react';



export default class SearchResults extends Component {

  constructor(props){
    super(props);
    this.mapResults = this.mapResults.bind(this);
    this.approval = this.approval.bind(this);
    this.approvalClick = this.approvalClick.bind(this);
    this.listAppointments = this.listAppointments.bind(this);

    console.log(this.props)

    this.state = {
      searchRes: []
      // searchRes: [{ID: "gdfgdfgdfgd", AppointmentsIDs: ["dsfdsfsdfsdfs", "ffsdghethfhgf"], DemographicInfo: {}}]

    }
    console.log(this.state)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchRes: nextProps.searchRes });
  }

  listAppointments(appointments){
    let count = 0;
    return appointments.map((app)=>{
      count++;
      return (<div >
        <a key={app} href={"/admin/appointmentData/" + app} > {"Appointment " + count} </a>
      </div>)
    })

  }

  approval(userID){
    if(this.props.pendingRes){
        return(
          <button className="submitBtn"
            onClick={this.approvalClick}
            value={userID}            >
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
    axios.patch(`${process.env.REACT_APP_API_URL}/clients/${e.target.value}`, JSON.stringify({status: "APPROVED"}), {headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}})
  .then(function (response) {
    console.log(response);
        axios.get(`${process.env.REACT_APP_API_URL}/clients_by_status/PENDING`, {headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}})
          .then(function (response) {
            console.log(response);
            that.setState({searchRes: []});
            if(response.data.length > 0){
              that.setState({searchRes: that.state.searchRes.concat(response.data)});
            }
          })
          .catch(function (error) {
            console.log(error);
          });
  })
  .catch(function (error) {
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
        <h4>
          Client Name: {userData.ClientName}
          <br/>
          Date Created: {userData.DateCreated}
          <br/>
          Client Email: {userData.ClientEmail}
          <br/>
          Client Phone: {userData.ClientPhone}
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
            Appointment IDs: {this.listAppointments(userData.AppointmentsIDs)}<br/>
            Status: {userData.Status}
          </div>

        <br/>
        {this.approval(userData.ID)}
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
