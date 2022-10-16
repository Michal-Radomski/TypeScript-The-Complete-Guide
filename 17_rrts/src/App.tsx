import React from "react";

import "./App.scss";

// function App():JSX.Element {
//   return <React.Fragment>App</React.Fragment>;
// }

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps, {}> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button style={{ color: this.props.color }} onClick={this.onIncrement}>
          Increment
        </button>
        <button style={{ color: this.props.color }} onClick={this.onDecrement}>
          Decrement
        </button>
        <br />
        Counter State: {this.state.counter}
      </div>
    );
  }
}

export default App;
