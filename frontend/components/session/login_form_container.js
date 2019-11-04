import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './login_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});
const mapDispatchToProps = (dispatch) => ({
  login: formUser => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);