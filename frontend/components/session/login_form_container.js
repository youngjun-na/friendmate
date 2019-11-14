import React from 'react';
import { connect } from 'react-redux';
import { login, demoLogin } from '../../actions/session_actions';
import SessionForm from './login_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});
const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));