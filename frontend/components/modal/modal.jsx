import React from 'react';
import { connect } from 'react-redux';
import PostCreateFormContainer from '../post/post_create_form_container';
import PostEditFormContainer from '../post/post_edit_form_container';
import { closeModal } from '../../actions/modal_actions';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal[0]) {
    case "postCreate":
      return <div className="modal-b" onClick={closeModal}></div>
    case "postEdit":
      component = <PostEditFormContainer postId={modal[1]}/>;
      break;
    default:
      return null;
  }
  return(
    <div className="modal-d" onClick={closeModal}>
      <div className="modal-c" onClick={e=>e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
  }
  const mapStateToProps = state => ({
    modal: state.ui.modal,
  });

  const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Modal);
