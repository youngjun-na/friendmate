import React from 'react';
import blackBackground from '../../../public/black_options.png'
export default class PostDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.postDropdownCont = React.createRef();
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
    this.props.openModal("postEdit", this.props.post.id);
  }
  handleClickOutside(e) {
    if (this.postDropdownCont.current && !this.postDropdownCont.current.contains(e.target)) {
      this.setState({showMenu: false});
    }
  }
  render() {
    return(
      <div className="post-dd" onClick={this.handleDropdown} ref={this.postDropdownCont}>
        <div className="g-o-b" style={this.state.showMenu ? { backgroundImage: `url(${blackBackground})`} : {}} >
        {this.state.showMenu && (<div className="post-dd-c">
          <div className="post-dd-i noselect" onClick={this.handleDelete}>
            Delete Post
          </div>
          <div className="post-dd-i noselect" onClick={this.handleEdit}>
            Edit Post
          </div>
        </div>)}
        </div>
      </div>
    )
  }
}