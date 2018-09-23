import React, { Component } from 'react';
import { userState } from '../State/state';
import ReferralForm from './ReferralForm';


export default class NewReferral extends Component {
  render() {
    return (
      <div>
        {userState.get(s => s.referrerEmail)}
        {userState.get(state => <ReferralForm state={state}/>)}

      </div>
    );
  }
}
