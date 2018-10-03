import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import { Card, Segment, Button, Grid } from 'semantic-ui-react';



export default class ClientDetails extends Component {

  constructor(props){
    super(props);
    this.mapResults = this.mapResults.bind(this);
    this.approval = this.approval.bind(this);
    this.approvalClick = this.approvalClick.bind(this);
    this.getAppointmentDetails = this.getAppointmentDetails.bind(this);
    this.mapToYesOrNo = this.mapToYesOrNo.bind(this);
    // this.listAppointments = this.listAppointments.bind(this);
    console.log(this.props.match.params.id)

    this.state = {
      searchRes: [],
      appointmentsData: []
      // searchRes: [{ID: "gdfgdfgdfgd", AppointmentsIDs: ["dsfdsfsdfsdfs", "ffsdghethfhgf"], DemographicInfo: {}}]

    }
    console.log(this.state)
  }


  mapToYesOrNo(bool){
    if(bool){
      return "Yes"
    }else{
      return "No"
    }
  }

  componentDidMount(){
    let that = this;
    let clientIDParam = this.props.match.params.id;
    axios.get('https://api.modernbaby.online/clients/'+clientIDParam, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
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
      axios.get('https://api.modernbaby.online/appointments_by_clientid/'+clientIDParam, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
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
          <a key={app} href={"/admin/appointments/" + app.ID} > {"Appointment " + count} </a>
        </div>)
      })
  }

  approval(data){
    console.log(data)
    if(data.status === "PENDING"){
        return(
          <Card.Content>
          <Button className="submitBtn"
            onClick={()=>this.approvalClick(data.id)}
            primary
            >
            Approve
          </Button>
        </Card.Content>
        )
    }else{
      return;
    }
  }

  approvalClick(id){
    let that = this;
    console.log(id)
    axios.put('https://api.modernbaby.online/clients/' + id, JSON.stringify({status: "APPROVED"}), {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
    .then(function (response) {
      console.log(response);
      let clientIDParam = that.props.match.params.id;
      axios.get('https://api.modernbaby.online/clients/'+clientIDParam, {headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
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
    if(this.state.searchRes && this.state.searchRes.length < 1){
      return <div></div>
    }
    let userData = this.state.searchRes[0];
    console.log(this.state.searchRes)
    return (
      <Segment className="approvalSegment">
        <div>
          <Card centered>
            <Card.Content>
              <Card.Header>
                {userData.ClientName}
              </Card.Header>
              <Card.Meta>
                {userData.ClientEmail}
              </Card.Meta>
              <Card.Meta>
                {userData.ClientPhone}
              </Card.Meta>
            </Card.Content>
          </Card>
            <Card.Group centered>
              <Card style={{width: "45%", position: "relative", margin: "10px"}}>
                {/* <div style={{textAlign: "center"}}>
                  <div style={{textAlign: "left", display: "inline-block"}}> */}
                <Grid columns='two'>
                  <Grid.Row>
                    <Grid.Column>
                      Client Date of Birth:
                    </Grid.Column>
                    <Grid.Column>
                      {userData.ClientDOB}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Baby Date of Birth:
                    </Grid.Column>
                    <Grid.Column>
                      {userData.BabyDOB}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Client Income:
                    </Grid.Column>
                    <Grid.Column>
                      {userData.ClientIncome}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Agency Name:
                    </Grid.Column>
                    <Grid.Column>
                      {userData.AgencyName}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Referrer Name:
                    </Grid.Column>
                    <Grid.Column>
                      {userData.ReferrerName}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Referrer Email:
                    </Grid.Column>
                    <Grid.Column>
                      {userData.ReferrerEmail}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card>
              <Card style={{width: "45%", display: "inline-block", position: "relative", margin: "10px"}}>
                <Grid columns='two'>
                  <Grid.Row>
                    <Grid.Column>
                      Child with special needs:
                    </Grid.Column>
                    <Grid.Column>
                      {this.mapToYesOrNo(userData.DemographicInfo.childWithSpecialNeeds)}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Homeless:
                    </Grid.Column>
                    <Grid.Column>
                      {this.mapToYesOrNo(userData.DemographicInfo.homeless)}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      New to Canada:
                    </Grid.Column>
                    <Grid.Column>
                      {this.mapToYesOrNo(userData.DemographicInfo.newToCanada)}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Under 19 Years Old:
                    </Grid.Column>
                    <Grid.Column>
                      {this.mapToYesOrNo(userData.DemographicInfo.under19)}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Unemployed:
                    </Grid.Column>
                    <Grid.Column>
                      {this.mapToYesOrNo(userData.DemographicInfo.unemployed)}
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      Other Demographic Info:
                    </Grid.Column>
                    <Grid.Column>
                      {userData.DemographicOther}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card>
            </Card.Group>
            <Card centered>
              <div style={{display: "inline-block", position: "relative", margin: "10px"}}>
                Appointments: {this.listAppointments()}<br/>
                Status: {userData.Status}
              </div>
                {this.approval({id: userData.ID, status: userData.Status})}
            </Card>
        </div>
      </Segment>
    )
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        {this.mapResults()}
      </div>
    )
  }
}
