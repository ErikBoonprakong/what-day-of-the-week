import React from "react";
import "./form.css";

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfTheWeek: "",
      day: "1",
      month: "1",
      year: "2022",
      // Century codes
      three: ["15", "19", "23"],
      two: ["16", "20", "24"],
      zero: ["17", "21", "25"],
      five: ["18", "22", "26"],
      // Days of each month that will always be the same day (doomsdays)
      // commonDay for jan and feb will be increased by 1 on a leap year
      commonDays: {
        1: 3,
        2: 28,
        3: 14,
        4: 4,
        5: 9,
        6: 6,
        7: 11,
        8: 8,
        9: 5,
        10: 10,
        11: 7,
        12: 12,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  calculateDay = () => {
    let a,
      b,
      c,
      d,
      dd = 0;
    // a = century code
    if (this.state.three.includes(this.state.year.slice(0, 2))) {
      a = 3;
    }
    if (this.state.two.includes(this.state.year.slice(0, 2))) {
      a = 2;
    }
    if (this.state.five.includes(this.state.year.slice(0, 2))) {
      a = 5;
    }
    if (this.state.zero.includes(this.state.year.slice(0, 2))) {
      a = 0;
    }
    // xx = last two digits of year
    let xx = this.state.year.slice(2, 4);
    b = Math.floor(parseInt(xx) / 12);
    c = parseInt(xx) % 12;
    d = Math.floor(c / 4);
    dd = a + b + c + d;
    console.log(a, b, c, d, dd);
    console.log(this.state.day);
    console.log(this.state.month);
    let commonDayNumber = this.state.commonDays[this.state.month];
    let newCommonDayNumber = commonDayNumber;
    // if leap year
    if (
      (parseInt(this.state.year) % 4 === 0 &&
        parseInt(this.state.year) % 100 !== 0) ||
      parseInt(this.state.year) % 400 === 0
    ) {
      if (
        this.state.month <= 2 &&
        parseInt(this.state.day) >= commonDayNumber
      ) {
        newCommonDayNumber = commonDayNumber + 1;
      } else if (
        this.state.month <= 2 &&
        parseInt(this.state.day) <= commonDayNumber
      ) {
        newCommonDayNumber = commonDayNumber - 1;
      }
    }
    let dayOfTheWeekNumber;
    if (parseInt(this.state.day) >= commonDayNumber) {
      dayOfTheWeekNumber =
        (dd + parseInt(this.state.day) - newCommonDayNumber) % 7;
    } else {
      dayOfTheWeekNumber =
        (dd + parseInt(this.state.day) - newCommonDayNumber * -1) % 7;
    }
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfTheWeek[dayOfTheWeekNumber];
  };

  handleSubmit(e) {
    e.preventDefault();
    let day = this.calculateDay();
    this.setState({ dayOfTheWeek: day });
  }

  render() {
    return (
      <div className="formWrapper">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Day
            <input
              className="input"
              type="number"
              min="1"
              max="31"
              id="day"
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <label>
            Month
            <input
              className="input"
              type="number"
              min="1"
              max="12"
              id="month"
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <label>
            Year
            <input
              className="input"
              type="number"
              min="1000"
              max="3100"
              id="year"
              onChange={(e) => this.handleChange(e)}
            ></input>
          </label>
          <br></br>
          <input type="submit" value="What day of the week is it?"></input>
        </form>
        <div className="answer">{this.state.dayOfTheWeek}</div>
      </div>
    );
  }
}

export default InputForm;
