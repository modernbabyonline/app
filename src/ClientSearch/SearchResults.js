import React, { Component } from 'react';



export default class SearchResults extends Component {

  constructor(props){
    super(props);
    this.mapResults = this.mapResults.bind(this);

  }

  mapResults(){
    return this.props.searchRes.map((userData)=>
      <div key={userData.email}>
        Client Email: {userData.email}
        <br/>
        Client Name: {userData.name}
        <br/>
        Client Phone: {userData.phone}
        <br/>
        <br/>
      </div>
    )
  }

  render() {
    return (
      <div>
        Search Results
        <br/>
        <br/>

        {this.mapResults()}
      </div>
    )
  }
}
