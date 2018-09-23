import React, { Component } from 'react';
import { userState } from '../State/state';
import ClientSearch from '../ClientSearch/ClientSearch';
import SearchResults from '../ClientSearch/SearchResults';

import axios from 'axios';
import {ClientListView} from "../ClientSearch/ClientListView";


class Admin extends Component {
  constructor(props){
    super(props);
    let that = this;
    that.state = {searchRes: []};
  }


  componentDidMount(){
    let that = this;
    axios.get('http://localhost:8000/clients?status=PENDING')
  .then(function (response) {
    console.log(response.data);
    if(response.data.length > 0){
      that.setState({searchRes: response.data});
    }
    console.log(that.state)
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  login() {
    this.props.auth.login();
  }

  searchResData() {
    return this.state.searchRes;
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    let that = this;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div style={{textAlign: "center"}}>
              <h3>
                Welcome Baby Go Round Admin
              </h3>
              <br/>
              <h3>Pending Applications</h3>
             <ClientListView searchRes={that.state.searchRes} />
           </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Admin;
