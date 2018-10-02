import React, { Component } from 'react';
import { userState } from '../State/state';
import { TextField, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';
import {ClientListView} from "./ClientListView";
import swal from 'sweetalert2';
import { Button } from 'semantic-ui-react';



export default class ClientSearch extends Component {

  constructor(props){
    super(props);
    this.searchClients = this.searchClients.bind(this);
    this.state = {
      searchRes: []
      // {email:"Dummy", name: "", phone: ""},{email:"Initial", name: "", phone: ""}
    };
  }

  searchClients(e){
    let data = this.props.state;
    // if(data.referrerName === ""){
    //     return;
    //   }
    let that = this;
      data = {
        searchTerm: data.searchTerm,
        searchField:data.searchField
      }

      console.log(data)
        axios.get('http://localhost:8000/search?' + data.searchField + '=' + data.searchTerm)
      .then(function (response) {
        that.state = {searchRes: []};
        if(response.data.length > 0){
          that.setState({searchRes: that.state.searchRes.concat(response.data)});
        }else{
          swal({title:"No results found"});
        }
        that.setState({searchRes: response.data});
      })
      .catch(function (error) {
        swal({title:"Error searching clients"});
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
            <MenuItem value={"email"}>email</MenuItem>
            <MenuItem value={"name"}>name</MenuItem>
            <MenuItem value={"phone"}>phone</MenuItem>
          </Select>
          <br/>
          <br/>
          <Button
            primary
            className="submitBtn"
            onClick={this.searchClients}
            >
            Search
          </Button>
        </div>
        ))}
        <br/>
        <h3>Search Results</h3>
        <br/>
        <ClientListView searchRes={this.state.searchRes} />
      </div>
    );
  }
}
