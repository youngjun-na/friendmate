import React from 'react';

export default class ProfilePicEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser
    this.handleFile = this.handleFile.bind(this);
    this.deletePic = this.deletePic.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ profileFile: file, profilePhotoUrl: fileReader.result });
    };
    if (file) fileReader.readAsDataURL(file);
  }
  deletePic() {
    this.setState({ profileFile: null, profilePhotoUrl: null });
  }
  handleModal() {
    this.props.closeModal();
    this.deletePic();
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[profilePic]', this.state.profileFile);
    formData.append('user[id]', this.state.id);
    this.props.updateUser(formData)
      .then(() => this.props.closeModal());
  }
  render() {
    let preview = this.state.profilePhotoUrl ? (
      <div className="photo-preview-cont">
        <div className="photo-preview-wrap">
          <div onClick={this.deletePic} className="photo-x-cancel">&times;</div>
          <img className="photo-preview" src={this.state.profilePhotoUrl} />
        </div>
      </div>
    ): (
    <label className = "prof-pic-button">
      <div>
        + Upload Photo
      </div >
      <input type="file" className="file-submit-button" onChange={this.handleFile} />
    </label >
  );
    let submitButtons = this.state.profilePhotoUrl? (
      <div className="prof-pic-button-cont">
        <button className="prof-pic-cancel" onClick={this.deletePic}>
          Cancel
        </button>
        <button className="prof-pic-submit">
          Save Changes
        </button>
      </div>) : null;
    return(
      <form className="prof-pic-edit-cont" onSubmit={this.handleSubmit}>
        <div className="prof-pic-edit-h">
          <div>Update Profile Picture</div>
          <span onClick={this.handleModal} className="x-cancel">&times;</span>
        </div>
        <div className="prof-pic-edit-b">
         {preview}
        </div>
        <div className="prof-pic-edit-footer">
          {submitButtons}
        </div>
      </form>
    );
  }
}