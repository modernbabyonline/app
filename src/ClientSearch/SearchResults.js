import React, { Component, Link } from 'react';
import axios from 'axios';



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
        <a key={app} href={"/appointmentData/" + app} > {"Appointment " + count} </a>
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
    axios.put('http://localhost:8000/clients?id=' + e.target.value, JSON.stringify({status: "APPROVED"}))
  .then(function (response) {
    console.log(response);
        axios.get('http://localhost:8000/clients?status=PENDING')
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
      <div key={userData.ID}>
        DateCreated: {userData.DateCreated}
        <br/>
        Client Email: {userData.ClientEmail}
        <br/>
        Client Name: {userData.ClientName}
        <br/>
        Client Phone: {userData.ClientPhone}
        <br/>
        Client Date of Birth: {userData.ClientDOB}
        <br/>
        Baby Date of Birth: {userData.BabyDOB}
        <br/>
        Client Income: {userData.ClientIncome}
        <br/>
        Appointment IDs: {this.listAppointments(userData.AppointmentsIDs)}
        Agency Name: {userData.AgencyName}
        <br/>
        Referrer Name: {userData.ReferrerName}
        <br/>
        Referrer Email: {userData.ReferrerEmail}
        <br/>
        Child with special needs: {userData.DemographicInfo.childWithSpecialneeds}
        <br/>
        Homeless: {userData.DemographicInfo.homeless}
        <br/>
        New to Canada: {userData.DemographicInfo.newToCanada}
        <br/>
        Under 19 Years Old: {userData.DemographicInfo.under19}
        <br/>
        Unemployed: {userData.DemographicInfo.unemployed}
        <br/>
        Other Demographic Info: {userData.DemographicOther}
        <br/>
        Status: {userData.Status}
        <br/>
        {this.approval(userData.ID)}
        <br/>
        <br/>

      </div>
    )
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <br/>
        <br/>

        {this.mapResults()}
      </div>
    )
  }
}
