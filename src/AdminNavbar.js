import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class AdminNavbar extends Component {
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
          w = 4;
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
                       name="approval"
                       active={activeItem === 'approval'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to="/admin"
                       >
                       Approval
                     </Menu.Item>
                   )
               }
               {
                    isAuthenticated() && (
                      <Menu.Item
                        name="search"
                        active={activeItem === 'search'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="admin/search"
                        >
                        Search
                      </Menu.Item>
                    )
                }
           </Menu>

        //      {
        //          isAuthenticated() && (
        //            <div>
        //              <Tab label="Logout" onClick={this.logout.bind(this)}  />
        //              <Tab label="Approval" href="/admin"  />
        //              <Tab label="Search" href="/admin/search"  />
        //            </div>
        //          )
        //        }
        //
        //    </Tabs>
        //  </AppBar>
        //     </div>
        );
    }
}

export default withRouter(AdminNavbar);
