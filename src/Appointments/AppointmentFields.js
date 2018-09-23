import React, { Component } from 'react';
import { TextField, FormLabel, Select, MenuItem  } from '@material-ui/core';
import { appointStateData } from '../State/state';



export default class AppointmentFields extends Component {
  constructor(props){
    super(props);
    this.parseByType = this.parseByType.bind(this);
    this.mapMenuItems = this.mapMenuItems.bind(this);

    this.state = {chosenOption: ""};
  }

  componentDidMount(){

  }


  parseByType(){
    let that = this;
    let label = that.props.label
    if(this.props.type === "dropdown"){
      return (
        <div>
          <FormLabel>{that.props.label + ": "}</FormLabel>
          {appointStateData.get(s =>(
            <Select
              value={this.state.chosenOption}
              // onChange={this.changeOption}
              onChange={e => {
                that.setState({ chosenOption: e.target.value });
                appointStateData.set({[that.props.label]: e.target.value})
                console.log(that.state)
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
              // onChange={this.changeOption}
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
