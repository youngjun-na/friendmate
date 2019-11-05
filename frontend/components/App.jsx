import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FeedContainer from './feed/feed_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <ProtectedRoute path='/' component={NavbarContainer} />
    </header>
    <ProtectedRoute path="/feed" component={FeedContainer}/>
    <Route path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/" component={SignupFormContainer} />
  </div>
);

export default App;