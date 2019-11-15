import React from 'react';
import { connect } from 'react-redux';
import { signup, demoLogin } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});
const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user)),
  demoLogin: () => dispatch(demoLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);