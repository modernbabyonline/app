import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'


class SociNav extends Component {

    state = {}

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const {isAuthenticated} = this.props.auth;
        const { activeItem } = this.state;
        let w = 2;
        if(isAuthenticated()){
          w = 3;
        }


        return (
            <Menu widths={w} inverted color='blue'>
              <Menu.Item
                name="landing"
                active={activeItem === 'landing'}
                onClick={this.handleItemClick}
                as={Link}
                to="/"
                >
                Baby Go Round
              </Menu.Item>
              {
                   !isAuthenticated() && (
                     <Menu.Item
                       name="login"
                       active={activeItem === 'login'}
                       onClick={this.login.bind(this)}
                       >
                       Login
                     </Menu.Item>
                   )
               }
               {
                    isAuthenticated() && (
                        <Menu.Item
                          name="logout"
                          active={activeItem === 'logout'}
                          onClick={this.logout.bind(this)}
                          >
                          Logout
                        </Menu.Item>
                    )
                }
                {
                     isAuthenticated() && (
                       <Menu.Item
                         name="home"
                         active={activeItem === 'home'}
                         onClick={this.handleItemClick}
                         as={Link}
                         to="/home"
                         >
                         New Referral
                       </Menu.Item>
                     )
                 }
            </Menu>
        );
    }
}

export default withRouter(SociNav);
