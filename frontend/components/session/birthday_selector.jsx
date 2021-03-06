import React from 'react';

class BirthdaySelector extends React.Component {
  constructor(props) {
    super(props);
  
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    this.days = [];
    let d = 1;
    while (d <= 31) {
      this.days.push(d++)
    }
    this.years = [];
    this.currDate = new Date();
    let y = this.currDate.getFullYear();
    while (y >= 1905) {
      this.years.push(y--)
    }
    this.state = {
      year: this.currDate.getFullYear() - 25,
      month: this.currDate.getMonth(),
      day: this.currDate.getDate(),
    }
    this.update = this.update.bind(this);
  }
  update(type) {
    return e => {
      let value = parseInt(event.target.value);
      if (type === "month") value = this.months.indexOf(e.target.value);
      this.setState({ [type]: value }, () => this.props.handleBirthday(this.state.year, this.state.month, this.state.day));  
    };
  }
  render() {
    const months = ["Month"].concat(this.months).map((month, idx) => {
      return <option 
              key={idx} disabled={idx === 0 ? "disabled" : ""}>{month}</option>
    });
    const days = ["Day"].concat(this.days).map((day, idx) => {
      return <option 
              key={idx} disabled={idx === 0 ? "disabled" : ""}>{day}</option>
    });
    const years = ["Year"].concat(this.years).map((year, idx) => {
      return <option 
              key={idx} 
              disabled={idx === 0 ? "disabled" : ""}>{year}</option>
    });
    return(
      <div className="bs-c">
        <select className="bs-s" onChange={this.update("month")} value={this.months[this.state.month]}>{months}</select>
        <select className="bs-s" onChange={this.update("day")} value={this.state.day}>{days}</select>
        <select className="bs-s" onChange={this.update("year")} value={this.state.year}>{years}</select>
      </div>
    );
  }
}

export default BirthdaySelector;