import React, {Component} from 'react';
import {userState} from '../State/state';
import axios from 'axios';
import swal from 'sweetalert2';
import { Card, Segment, Button, Form, Checkbox } from 'semantic-ui-react';



class NewReferral extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.resetClientData = this.resetClientData.bind(this);
  }

  resetClientData(){
    userState.set({
      referrerEmail: "",
      referrerName: "",
      referrerAgency: "",
      clientName: "",
      clientPhone: "",
      clientEmail: "",
      clientDOB: "",
      babyDOB: "",
      clientInc: "",
      socioL19: false,
      socioUnemployed:false,
      socioNewToCanada: false,
      socioSpecial: false,
      socioHomeless: false,
      socioOther: "",
      sin: ""
    });

  }

  onSubmit(e){
    let that = this;
    let data = this.props.state;
    console.log(data)
    if(data.referrerName === "" ||
      data.clientName === "" ||
      data.clientPhone === "" ||
      data.clientEmail === "" ||
      data.clientDOB === "" ||
      data.babyDOB === "" ||
      data.clientInc === "" ||
      data.sin === ""
      ){
        swal({title: "Missing Information"});
        return;
      }

      data = {
        referrerEmail: data.referrerEmail,
        referrerName: data.referrerName,
        clientName: data.clientName,
        clientPhone: data.clientPhone,
        clientEmail: data.clientEmail,
        clientDOB: data.clientDOB,
        babyDOB: data.babyDOB,
        clientInc: data.clientInc,
        socioL19: data.socioL19,
        socioUnemployed: data.socioUnemployed,
        socioNewToCanada: data.socioNewToCanada,
        socioSpecial: data.socioSpecial,
        socioHomeless: data.socioHomeless,
        socioOther: data.socioOther,
        sin: data.sin
      }


        axios.post(`${process.env.REACT_APP_API_URL}/clients`, JSON.stringify(data), {headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}})
      .then(function (response) {
        swal({title: "Client Info successfully posted"});
        that.resetClientData();
        let form = document.querySelector('.referralForm');
        form.reset();
        console.log(response);
      })
      .catch(function (error) {
        swal({title: "There was a problem posting client info"});
        console.log(error);
      });
  }




  render(){



    return (
      <Form className="referralForm">
        {userState.get(s =>(
          <Card fluid className="referralCard">
            {/* style={{margin:"10px",display:"inline-block", width:"100%"}} */}
            <Segment.Group horizontal={true}>
              <Segment compact={true} fluid="true" className="referralSegment" >
                <Form.Field
                  onChange={e => {
                    userState.set({referrerAgency: e.target.value})
                    }
                  }>
                  <label>Agency</label>
                  <input placeholder='Referrer Agency' />
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({referrerName: e.target.value})
                    }
                  }>
                  <label>Social Worker Name</label>
                  <input placeholder='Social Worker Full Name' />
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({sin: e.target.value})
                    }
                  }>
                  <label>Client SIN</label>
                  <input placeholder='SIN' />
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({clientName: e.target.value})
                    }
                  }>
                  <label>Client Name</label>
                  <input placeholder='Client Name Full Name' />
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({clientPhone: e.target.value})
                    }
                  }>
                  <label>Client Phone</label>
                  <input placeholder='Client Phone Number' />
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({clientEmail: e.target.value})
                    }
                  }>
                  <label>Client Email</label>
                  <input placeholder='Client Email Address' />
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({clientDOB: e.target.value})
                    }
                  }>
                  <label>Client DOB</label>
                  <input placeholder='Client Date Of Birth' />
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({babyDOB: e.target.value})
                    }
                  }>
                  <label>Baby DOB</label>
                  <input placeholder='Baby Date Of Birth' />
                </Form.Field>
            </Segment>

            <Segment compact fluid="true" className="referralSegment">
              <div style={{display: "inline-block", textAlign: "left"}}>
                <Form.Field
                  onChange={e => {
                    userState.set({clientInc: e.target.value})
                    }
                  }>
                  <label>Client Income</label>
                  <input placeholder='Client Income' />
                </Form.Field>
                <Form.Field >
                  <Checkbox toggle fitted label='Client less than 19 years old?'
                    onChange={(e, { checked }) => {
                      userState.set({socioL19: checked})}}/>
                </Form.Field>
                <Form.Field >
                  <Checkbox toggle fitted label='Client unemployed?'
                    onChange={(e, { checked }) => {
                      userState.set({socioUnemployed: checked})}}/>
                </Form.Field>
                <Form.Field >
                  <Checkbox toggle fitted label='Client new to Canada?'
                    onChange={(e, { checked }) => {
                      userState.set({socioNewToCanada: checked})}}/>
                </Form.Field>
                <Form.Field >
                  <Checkbox toggle fitted label='Child with special needs?'
                    onChange={(e, { checked }) => {
                      userState.set({socioSpecial: checked})}}/>
                </Form.Field>
                <Form.Field >
                  <Checkbox toggle fitted label='Client homeless?'
                    onChange={(e, { checked }) => {
                      userState.set({socioHomeless: checked})}}/>
                </Form.Field>
                <Form.Field
                  onChange={e => {
                    userState.set({socioOther: e.target.value})
                    }
                  }>
                  <label>Social Demographics (Other)</label>
                  <input placeholder='Social Demographics (Other)' />
                </Form.Field>
              </div>
              <br/>
                <div className="flexCenterAll" style={{flexFlow: "column", paddingTop: "30px"}}>
                  <Button
                      primary
                      className="submitBtn"
                      onClick={this.onSubmit}>
                      Submit
                  </Button>
                </div>
          </Segment>
        </Segment.Group>
        </Card>
))}
            </Form>
        );
    };


}

export default NewReferral;
