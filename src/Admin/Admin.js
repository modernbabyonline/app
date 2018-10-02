import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';
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
    axios.get('https://api.modernbaby.online/clientsByStatus/PENDING', {headers: {"Authorization", "Bearer " + localStorage.getItem("access_token")}})
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
              <Segment className="babyGoOrange">
                <h3 style={{color: "rgb(245,245,245)"}}>
                  Pending Applications
                </h3>
              </Segment>
             <ClientListView searchRes={that.state.searchRes} />
           </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <Button
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                  primary
                >
                  Log In
                </Button>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Admin;
