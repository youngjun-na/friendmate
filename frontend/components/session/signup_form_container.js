import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});
const mapDispatchToProps = (dispatch) => ({
  signup: formUser => dispatch(signup(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);