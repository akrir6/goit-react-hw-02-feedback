import { Component } from "react";
// import { Feedback } from "./Feedback/Feedback";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad:0,
  }
  
  handleIncrement = (e) => {
    const { name } = e.target;
    this.setState(prevState => {
      return {[name]: prevState[name] + 1}
    });
  }

  render() {
    return (
      <>
        {/* <Feedback stats={this.state} /> */}
        <div>
          <h1>Please leave feedback</h1>
          <div>
            {Object.keys(this.state).map(item => { 
              return (<button type="button" onClick={this.handleIncrement} name={item} key={item}>{item}</button>)
            })}
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            {Object.keys(this.state).map(item => { 
              return (<li key={item}>{item}: {this.state[item]}</li>)
            })}
          </ul>
        </div>
      </>
    );
  }
};
