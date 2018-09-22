import React, { Component } from 'react';
import { userState, setAgentName } from '../State/state';
import { Card, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Button } from '@material-ui/core';




class NewReferral extends Component {

  componentWillMount(){
    userState.set({agentName:"", clientName: ""});
  }




  render(){



    return (
      <div>
        {userState.get(s =>(
          <Card className="refForm">
            <TextField
              id="Social Worker Name"
              label="Social Worker Name"
              value=  {s.agentName}
              onChange={e => userState.set({agentName: e.target.value})}
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
              id="Client DOB"
              label="Client Date Of Birth"
              value=  {s.clientDoB}
              onChange={e => userState.set({clientDoB: e.target.value})}
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
              id="Socio Other"
              label="Social Demographics (Other)"
              value=  {s.socioOther}
              onChange={e => userState.set({socioOther: e.target.value})}
            />
            <br/>
            <br/>
            <br/>
            <Button
              color="primary">Submit</Button>
        </Card>
        ))}
      </div>
    );
  };


}

export default NewReferral;
