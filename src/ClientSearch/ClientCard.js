import React, { Component } from 'react';
import {Card} from '@material-ui/core';

export class ClientCard extends Component {

    render() {
        console.log(this.props.clientInfo.ClientName);
        return (
          <Card>
              <a href={"/clientDetails/" + this.props.clientInfo.ID}><h3>{this.props.clientInfo.ClientName}</h3></a>
              <h4>{this.props.clientInfo.ClientEmail}</h4>
          </Card>
        );
    }

}
