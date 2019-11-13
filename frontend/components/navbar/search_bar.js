import React from 'react';
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    }
  }
  handleInput(e) {
    this.setState({search: e.target.value});
  }
  componentDidMount() {
    this.setState({search: ""});
  }
  render() {
    return(
    <div>
      <input className="nb-sb" type="text" placeholder="Search" />
        {/* <ul className="search-result">
          {}
        </ul> */}
    </div>
    )
  }
}