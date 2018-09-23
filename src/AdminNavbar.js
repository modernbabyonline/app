import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Navbar, Button} from 'react-bootstrap';
import {AppBar, Tabs, Tab} from '@material-ui/core'


class AdminNavbar extends Component {
  constructor(props){
    super(props);
  }


    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const {isAuthenticated} = this.props.auth;

        return (
            <div>

        <AppBar position="static">
           <Tabs >
             <Tab label="Baby Go Round" href="/"  />
             {
                 !isAuthenticated() && (
                     <Tab
                         label="Login"
                         onClick={this.login.bind(this)}
                     >
                         Log In
                     </Tab>
                 )
             }
             {
                 isAuthenticated() && (
                   <div>
                     <Tab label="Logout" onClick={this.logout.bind(this)}  />
                     <Tab label="Approval" href="/admin"  />
                     <Tab label="Search" href="/admin/search"  />
                   </div>
                 )
               }

           </Tabs>
         </AppBar>
            </div>
        );
    }
}

export default withRouter(AdminNavbar);
