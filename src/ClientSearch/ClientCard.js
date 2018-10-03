import React, { Component } from 'react';
import { Card} from 'semantic-ui-react';


export class ClientCard extends Component {

    render() {
        console.log(this.props.clientInfo.ClientName);
        return (
          <Card fluid>
              <a href={"/admin/clients/" + this.props.clientInfo.ID}><h3>{this.props.clientInfo.ClientName}</h3></a>
              <h4 style={{color: "#FFA500"}}>{this.props.clientInfo.ClientEmail}</h4>
          </Card>
        );
    }

}
