import React from 'react';

export default class PostDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownCont = React.createRef();
    this.state = {
      showMenu: false,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleDropdown(e) {
    // e.currentTarget.children[1].classList.toggle("show");
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post);
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.openModal("editPost", this.props.post.id);
  }
  handleClickOutside(e) {
    if (this.dropdownCont.current && !this.dropdownCont.current.contains(e.target)) {
      this.setState({
        showMenu: false,
      });
    }
  }
  render() {
    return(
      <div className="post-dd" onClick={this.handleDropdown} ref={this.dropdownCont}>
        <div className="g-o-b" ></div>
        {this.state.showMenu && (<div className="post-dd-c">
          <div className="post-dd-i noselect" onClick={this.handleDelete}>
            Delete Post
          </div>
          <div className="post-dd-i noselect" onClick={this.handleEdit}>
            Edit Post
          </div>
        </div>)}
      </div>
    )
  }
}