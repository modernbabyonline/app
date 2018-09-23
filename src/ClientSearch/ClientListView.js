import React, { Component } from 'react';
import {ClientCard} from "./ClientCard";

export class ClientListView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.searchRes);
        return this.props.searchRes.map(client => <ClientCard key={client.ID} clientInfo={client}/>);
    }

}