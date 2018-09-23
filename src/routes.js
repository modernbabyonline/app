import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Admin from './Admin/Admin';
import Search from './ClientSearch/Search';
import AppointmentsWrapper from './Appointments/AppointmentsWrapper';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import { appointStateData } from './State/state';


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
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route exact path="/admin" render={(props) => <Admin auth={auth} {...props} />} />
          <Route exact path="/admin/search" render={(props) => <Search auth={auth} {...props} />} />
          <Route path="/appointmentData/:id" render={(props) =>
            <AppointmentsWrapper
              auth={auth}
              {...props} />}

          />


          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
