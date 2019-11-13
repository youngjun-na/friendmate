import React from 'react';
import blackBackground from '../../../app/assets/images/black_options.png';
import pencil from '../../../app/assets/images/pencil.png';
import trash from '../../../app/assets/images/trash.png';
export default class CommentDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.commentDropdownCont = React.createRef();
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
    this.props.deleteComment(this.props.comment);
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.handleEdit();
  }
  handleClickOutside(e) {
    if (this.commentDropdownCont.current && !this.commentDropdownCont.current.contains(e.target)) {
      this.setState({
        showMenu: false,
      });
    }
  }
  render() {
    return (
      <div className="com-dd" onClick={this.handleDropdown} ref={this.commentDropdownCont}>
        <div className="g-o-b" style={this.state.showMenu ? { backgroundImage: `url(${blackBackground})` } : {}} >
          {this.state.showMenu && (<div className="com-dd-c">
            <div className="com-dd-i noselect" onClick={this.handleDelete}>
              <img src={trash} className="com-dd-p"/> Delete...
          </div>
            <div className="com-dd-i noselect" onClick={this.handleEdit}>
              <img src={pencil} className="com-dd-p"/> Edit...
          </div>
          </div>)}
        </div>
      </div>
    )
  }
}