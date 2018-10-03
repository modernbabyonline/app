import React, { Component } from 'react';
import { TextField, FormLabel, Select, MenuItem  } from '@material-ui/core';
import { appointStateData } from '../State/state';

export default class AppointmentFields extends Component {
  constructor(props){
    super(props);
    this.parseByType = this.parseByType.bind(this);
    this.mapMenuItems = this.mapMenuItems.bind(this);

    let label = this.props.label;
    this.state = {chosenOption: ""}
    let keyNames = Object.keys(props.state);


    for (let i=0; i < keyNames.length; i++) {
      if (keyNames[i] === label) {
        this.state = {chosenOption: props.state[label]};
      }
    }
    
    let items = props.state.Items;

    for (let i=0; i < items.length; i++) {
      if (items[i].Item === label) {
        this.state = {chosenOption: items[i].Status }
      }
    }
  }

  parseByType(){
    let that = this;
    if(this.props.type === "dropdown"){
      return (
        <div>
          <FormLabel>{that.props.label + ": "}</FormLabel>
          {appointStateData.get(s =>(
            <Select
              value={this.state.chosenOption}
              onChange={e => {
                that.setState({ chosenOption: e.target.value });
                appointStateData.set({[that.props.label]: e.target.value})
                }
              }
              name={that.props.label}
            >
            {this.mapMenuItems()}
            </Select>
          ))}
      </div>
      )
    } else {
      return (
        <div>
          {appointStateData.get(s =>(
            <TextField
              value={this.state.chosenOption}
              onChange={e => {
                that.setState({ chosenOption: e.target.value });
                appointStateData.set({[that.props.label]: e.target.value})
                console.log(that.state)
                }
              }
              label={that.props.label}
            >
            </TextField>
          ))}
      </div>
      )
    }
  }

  mapMenuItems(){
    return this.props.options.map((item)=>{
      return   <MenuItem key={item} value={item}>{item}
                </MenuItem>

    });
  }

  render(){

    return <div>
      {this.parseByType()}
    </div>
  }
}
