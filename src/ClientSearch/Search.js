import React, { Component } from 'react';
import { userState } from '../State/state';
import ClientSearch from './ClientSearch';
import SearchResults from './SearchResults';
import axios from 'axios';


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchRes: [{email:"Dummy", name: "", phone: ""},{email:"Initial", name: "", phone: ""}]

      // searchRes: []
      // {email:"Dummy", name: "", phone: ""},{email:"Initial", name: "", phone: ""}
    };
  }

  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div style={{textAlign: "center"}}>
              <h3>
                Welcome Baby Go Round Admin
                {userState.get(state => <ClientSearch state={state}/>)}
              </h3>
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

export default Search;
