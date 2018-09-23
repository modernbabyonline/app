import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { userState } from '../State/state';
import { Card, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Button, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';



export default class ClientSearch extends Component {

  constructor(props){
    super(props);
    this.searchClients = this.searchClients.bind(this);
  }

  searchClients(e){
    let data = this.props.state;
    // if(data.referrerName === ""){
    //     return;
    //   }

      data = {
        searchTerm: data.searchTerm,
        searchField:data.searchField
      }

      console.log(data)
        axios.post('TEMP_URL', JSON.stringify(data))
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{display: "inline-block", width: "100%", textAlign: "center"}}>
        {userState.get(s => s.referrerEmail)}
        {userState.get(s =>(
          <div>
          <TextField
            id="Search Term"
            label="Search Term"
            value=  {s.searchTerm}
            onChange={e => userState.set({searchTerm: e.target.value})}
          />
          <br/>
          <br/>
          <Select
            value={s.searchField}
            onChange={e => userState.set({searchField: e.target.value})}
            displayEmpty
            name="age"
          >
            <MenuItem value="">
              <em>Search Field</em>
            </MenuItem>
            <MenuItem value={"Email"}>Email</MenuItem>
            <MenuItem value={"Name"}>Name</MenuItem>
            <MenuItem value={"Phone"}>Phone</MenuItem>
          </Select>
          <br/>
          <br/>
          <button
            className="submitBtn"
            onClick={this.searchClients}
            >
            Search
          </button>
        </div>
        ))}
        <br/>
        <SearchResults searchRes={[{email:"sdfsdf", name: "", phone: ""},{email:"khjkjh", name: "", phone: ""}]} />
      </div>
    );
  }
}
