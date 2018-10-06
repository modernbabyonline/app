import React, { Component } from 'react';
import { Card} from 'semantic-ui-react';


export class ClientCard extends Component {

    render() {
        return (
          <Card fluid>
              <a href={"/admin/clients/" + this.props.clientInfo["_id"]}><h3>{this.props.clientInfo.clientName}</h3></a>
              <h4 style={{color: "#FFA500"}}>{this.props.clientInfo.clientEmail}</h4>
          </Card>
        );
    }

}
