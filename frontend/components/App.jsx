import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import FeedContainer from './feed/feed_container';
import WallContainer from './wall/wall_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <ProtectedRoute path='/' component={NavbarContainer} />
    </header>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/feed" component={FeedContainer} />
      {/* <ProtectedRoute path="/profile/:userId" component={WallContainer} /> */}
      <AuthRoute exact path="/" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;