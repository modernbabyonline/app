import React, { Component } from 'react';
import { userState } from '../State/state';
import axios from 'axios';
import {ClientListView} from "./ClientListView";
import swal from 'sweetalert2';
import { Form,Card, Button, Segment } from 'semantic-ui-react';



export default class ClientSearch extends Component {

  constructor(props){
    super(props);
    this.searchClients = this.searchClients.bind(this);
    this.state = {
      searchRes: []
      // {email:"Dummy", name: "", phone: ""},{email:"Initial", name: "", phone: ""}
    };
  }

  searchClients(e){
    let data = this.props.state;
    // if(data.referrerName === ""){
    //     return;
    //   }
    console.log(data)
    let that = this;
      data = {
        searchTerm: data.searchTerm,
        searchField:data.searchField
      }

      console.log(data)
        axios.get('https://api.modernbaby.online/search?' + data.searchField + '=' + data.searchTerm, {headers: {"Authorization": "Bearer " + localStorage.getItem("id_token")}})
      .then(function (response) {
        that.state = {searchRes: []};
        if(response.data && response.data.length > 0){
          that.setState({searchRes: that.state.searchRes.concat(response.data)});
        }else{
          swal({title:"No results found"});
        }
        that.setState({searchRes: response.data});
      })
      .catch(function (error) {
        swal({title:"Error searching clients"});
        console.log(error);
      });
  }

  render() {
    return (
      <Segment fluid="true">
        <Card centered fluid>
          <Card.Content>
            {userState.get(s =>(
              <Form>
                <Form.Field
                  onChange={e => {
                    userState.set({searchTerm: e.target.value})
                    }
                  }>
                  <label>Search Term</label>
                  <input placeholder='What to find' />
                </Form.Field>
                Search Field
                <Form.Group widths='equal'>
                  <Form.Radio
                    label='Email'
                    checked={ this.props.state.searchField === 'email' }
                    onClick={e => { userState.set({searchField: 'email'});
                    }}
                  />
                  <Form.Radio
                    label='Name'
                    checked={ this.props.state.searchField === 'name' }
                    onClick={e => { userState.set({searchField: 'name'});
                    }}
                  />
                  <Form.Radio
                    label='Phone'
                    checked={ this.props.state.searchField === 'phone' }
                    onClick={e => { userState.set({searchField: 'phone'});
                    }}
                  />
                </Form.Group>
              </Form>
            ))}
          </Card.Content>
          <Button
             primary
             className="submitBtn"
             onClick={this.searchClients}
             >
             Search
           </Button>
        </Card>
          <br/>
          <h3>Search Results</h3>
          <br/>
          <ClientListView searchRes={this.state.searchRes} />
      </Segment>
    );
  }
}
