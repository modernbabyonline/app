import React, { Component } from 'react';
import NewReferral from './NewReferral';
import { Button } from 'semantic-ui-react';


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {/* {
          isAuthenticated() && (
              <h4>
                Welcome Baby Go Round Admin
                {userState.get(state => <ClientSearch state={state}/>)}
              </h4>
            )
        } */}
        {
          isAuthenticated() && (
            <div>
              <h2>New Referral</h2>
              <NewReferral />
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

export default Home;
