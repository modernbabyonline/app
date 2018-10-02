import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import SociNav from './Navbar';
import Home from './components/Home';
import Admin from './Admin/Admin';
import Search from './ClientSearch/Search';
import ClientDetails from './ClientSearch/ClientDetails';
import AppointmentsWrapper from './Appointments/AppointmentsWrapper';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';



const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div style={{display: "inline-block",
        width: "100%",
        textAlign: "center"}}>
        <Switch>
          <Route path="/admin" render={(props) => <AdminNavbar auth={auth} {...props} />} />
          <Route path="/" render={(props) => <SociNav auth={auth} {...props} />} />
        </Switch>
          <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/admin" render={(props) => <Admin auth={auth} {...props} />} />
          <Route exact path="/admin/search" render={(props) => <Search auth={auth} {...props} />} />
          <Route path="/admin/appointmentData/:id" render={(props) =>
            <AppointmentsWrapper
              auth={auth}
              {...props} />}

          />

          <Route path="/admin/clientDetails/:id" render={(props) =>
            <ClientDetails
              auth={auth}
              {...props} />} />

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
