import React, { Component } from 'react';
import {ClientCard} from "./ClientCard";

export class ClientListView extends Component {
    render() {
        return this.props.searchRes.map(client => <ClientCard key={client.ID} clientInfo={client}/>);
    }

}
