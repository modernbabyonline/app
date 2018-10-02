import React, { Component } from 'react';
import NewReferral from './NewReferral';


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

export default Home;
