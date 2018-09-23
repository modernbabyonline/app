import React, { Component } from 'react';
import { userState } from '../State/state';
import NewReferral from '../Referrals/NewReferral';
import ClientSearch from '../ClientSearch/ClientSearch';


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
              <h4>
                You are logged in as:
                <NewReferral />
              </h4>
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
