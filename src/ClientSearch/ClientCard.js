import React, { Component } from 'react';
import {Card, CardHeader} from '@material-ui/core';

export class ClientCard extends Component {

    constructor(props) {
        super(props);
    }

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
