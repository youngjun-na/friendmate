import React from 'react';

export default class PostDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleDropdown(e) {
    e.currentTarget.children[1].classList.toggle("show");
  }
  // window.onclick = event => {
  //   if (!event.target.matches('.g-o-b')) {
  //     let dropdowns = document.getElementsByClassName("post-dd-c");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
  handleBlur(e) {
    console.log(e.currentTarget, e.target)
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post);
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.openModal("editPost", this.props.post.id);
  }
  render() {
    return(
      <div className="post-dd" onBlur={this.handleBlur} onClick={this.handleDropdown}>
        <div className="g-o-b" ></div>
        <div className="post-dd-c">
          <div className="post-dd-i noselect" onClick={this.handleDelete}>
            Delete Post
          </div>
          <div className="post-dd-i noselect" onClick={this.handleEdit}>
            Edit Post
          </div>
        </div>
      </div>
    )
  }
}