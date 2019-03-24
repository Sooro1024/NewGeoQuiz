import React, { Component } from "react";
import TimerStyles from "./TimerStyles";
import CircularProgressbar from "react-circular-progressbar";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 60
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time - 1 });
    }, 250);
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.progress !== this.props.progress ) {
      this.setState({ time: 60 });
    } else if (this.state.time === 0) {
      this.props.CheckTheAnswer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const itsLeft = Math.round(this.state.time * 1.6);
    return (
      <CircularProgressbar
        percentage={itsLeft}
        text={`${this.props.result}`}
        styles={TimerStyles}
      />
    );
  }
}