import React, { Component } from 'react';
import {ClientCard} from "./ClientCard";
import { Card, Segment } from 'semantic-ui-react';


export class ClientListView extends Component {
    render() {
        if(!this.props.searchRes){
          return <div></div>
        }
        return (
          <Segment inverted className="approvalSegment" style={{minHeight: "100vh"}}>
            <Card.Group>
              { this.props.searchRes.map(client => <ClientCard key={client.ID} clientInfo={client}/>) }
            </Card.Group>
          </Segment>
        )

    }

}
