import React from 'react';

class GenderSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick(e) {
    let customDiv = document.querySelector(".su-g-cd")
    if (e.currentTarget.value === "Custom") {
      customDiv.classList.remove("su-g-h");
      this.props.handleGender("")
    }
    else {
      customDiv.classList.add("su-g-h");
      this.props.handleGender(e.currentTarget.value)
    }
  }

  handleInput(e) {
    this.props.handleGender(e.currentTarget.value)
    // this.setState({
    //   gender: e.currentTarget.value
    // })
  }
  render() {
    let gender = this.props.gender;
    return (
      <div>
        <div className="su-l" > Gender</div>
        <div className="su-g">
          <div className="su-g-r">
            <input type="radio" name="gender" value="Female" onChange={this.handleClick}/><span>Female</span>
          </div>
          <div className="su-g-r" >
            <input type="radio" name="gender" value="Male" onChange={this.handleClick}/><span>Male</span>
          </div>
          <div className="su-g-r" >
            <input type="radio" name="gender" value="Custom" onChange={this.handleClick}/><span>Custom</span>
          </div>
        </div>
        <div className="su-g-cd su-g-h">
          <select className="gs-s">
            <option disabled>Select your pronoun</option>
            <option>She: "Wish her a happy birthday!"</option>
            <option>He: "Wish him a happy birthday!</option>
            <option>They: "Wish them a happy birthday!</option>
          </select>
          <div className="su-sl">Your pronoun is visible to everyone.</div>
          <input type="text" className="fi" value={gender} placeholder="Gender (optional)" onChange={this.handleInput}/>
        </div>
      </div>
    );
  }
  
}

export default GenderSelector