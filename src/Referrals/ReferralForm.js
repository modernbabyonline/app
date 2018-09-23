import React, {Component} from 'react';
import {userState, setAgentName} from '../State/state';
import {Card, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Button} from '@material-ui/core';
import axios from 'axios';


class NewReferral extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    userState.set({agentName:"", clientName: ""});
  }

  onSubmit(e){
    let data = this.props.state;
    console.log(data)
    if(data.referrerName === "" ||
      data.clientName === "" ||
      data.clientPhone === "" ||
      data.clientEmail === "" ||
      data.clientDoB === "" ||
      data.babyDoB === "" ||
      data.clientInc === ""
      ){
        console.log("Missing info")
        return;
      }

      data = {
        referrerEmail: data.referrerEmail,
        referrerName: data.referrerName,
        clientName: data.clientName,
        clientPhone: data.clientPhone,
        clientEmail: data.clientEmail,
        clientDoB: data.clientDoB,
        babyDoB: data.babyDoB,
        clientInc: data.clientInc,
        socioL19: data.socioL19,
        socioUnemployed: data.socioUnemployed,
        socioNewToCanada: data.socioNewToCanada,
        socioSpecial: data.socioSpecial,
        socioHomeless: data.socioHomeless,
        socioOther: data.socioOther,
      }
        axios.post('http://localhost:8000/clients', JSON.stringify(data))
      .then(function (response) {
        console.log("Sent");
        console.log(response);
      })
      .catch(function (error) {
        console.log("Error");
        console.log(error);
      });
  }




  render(){



    return (
      <div>
        {userState.get(s =>(
          <Card className="refForm">
            <TextField
              id="Social Worker Name"
              label="Social Worker Name"
              value=  {s.referrerName}
              onChange={e => userState.set({referrerName: e.target.value})}
            />
            <br/>
            <TextField
              id="Client Name"
              label="Client Name"
              value=  {s.clientName}
              onChange={e => userState.set({clientName: e.target.value})}
            />
            <br/>
            <TextField
              id="Client Phone"
              label="Client Phone"
              value=  {s.clientPhone}
              onChange={e => userState.set({clientPhone: e.target.value})}
            />
            <br/>
            <TextField
              id="Client Email"
              label="Client Email"
              value=  {s.clientEmail}
              onChange={e => userState.set({clientEmail: e.target.value})}
            />
            <br/>
            <TextField
              id="Client DOB"
              label="Client Date Of Birth"
              value=  {s.clientDoB}
              onChange={e => userState.set({clientDoB: e.target.value})}
            />
            <br/>
            <TextField
              id="Baby DOB"
              label="Baby Date Of Birth"
              value=  {s.babyDoB}
              onChange={e => userState.set({babyDoB: e.target.value})}
            />
            <br/>
            <TextField
              id="clientInc"
              label="Client Income"
              value=  {s.clientInc}
              onChange={e => userState.set({clientInc: e.target.value})}
            />
            <br/>
            <div className="referralRadioGroup">
              <FormControl>
              <FormLabel >Client less than 19 years old?</FormLabel>
                <RadioGroup
                  name="lessThan19"
                  aria-label="Client less than 19 years old"
                  value= {s.socioL19}
                  onChange={e => userState.set({socioL19: e.target.value})}

                  >
                  <FormControlLabel className="radioB" value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel className="radioB" checked="true" value="false" control={<Radio />} label="No" />

                </RadioGroup>
              </FormControl>
              <br/>
              <FormControl>
              <FormLabel >Client unemployed?</FormLabel>
                <RadioGroup
                  name="Client unemployed"
                  aria-label="Client unemployed"
                  value= {s.socioUnemployed}
                  onChange={e => userState.set({socioUnemployed: e.target.value})}

                  >
                  <FormControlLabel className="radioB" value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel className="radioB" checked="true" value="false" control={<Radio />} label="No" />

                </RadioGroup>
              </FormControl>
              <br/>
              <FormControl>
              <FormLabel >Client new to Canada?</FormLabel>
                <RadioGroup
                  name="Client new to Canada"
                  aria-label="Client new to Canada"
                  value= {s.socioNewToCanada}
                  onChange={e => userState.set({socioNewToCanada: e.target.value})}

                  >
                  <FormControlLabel className="radioB" value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel className="radioB" checked="true" value="false" control={<Radio />} label="No" />

                </RadioGroup>
              </FormControl>
              <br/>
              <FormControl>
              <FormLabel >Child with special needs?</FormLabel>
                <RadioGroup
                  name="Child with special needs?"
                  aria-label="Child with special needs?"
                  value= {s.socioSpecial}
                  onChange={e => userState.set({socioSpecial: e.target.value})}

                  >
                  <FormControlLabel className="radioB" value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel className="radioB" checked="true" value="false" control={<Radio />} label="No" />

                </RadioGroup>
              </FormControl>
              <br/>
              <FormControl>
              <FormLabel >Client Homeless?</FormLabel>
                <RadioGroup
                  name="Client Homeless?"
                  aria-label="Client Homeless?"
                  value= {s.socioHomeless}
                  onChange={e => userState.set({socioHomeless: e.target.value})}
                  >
                  <FormControlLabel className="radioB" value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel className="radioB" checked="true" value="false" control={<Radio />} label="No" />

                </RadioGroup>
              </FormControl>
            </div>
            <br/>
            <TextField
                className="refFormTextElement"
                id="Socio Other"
                label="Social Demographics (Other)"
                value={s.socioOther}
                onChange={e => userState.set({socioOther: e.target.value})}
            />
            <br/>
            <br/>
            <br/>
            <button
                className="submitBtn"
                onClick={this.onSubmit}
            >
                Submit
            </button>
        </Card>
))}
            </div>
        );
    };


}

export default NewReferral;
