import React from "react";

import "./App.scss";

interface AppProps {
  color?: string;
}
interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  // state = { counter: 0 };

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

// function App(props: AppProps): JSX.Element {
//   const [state, setState] = React.useState<AppState>({ counter: 0 });

//   const onIncrement = (): void => {
//     setState({ counter: state.counter + 1 });
//   };
//   const onDecrement = (): void => {
//     setState({ counter: state.counter - 1 });
//   };

//   return (
//     <div>
//       <button style={{ color: props.color }} onClick={onIncrement}>
//         Increment
//       </button>
//       <button style={{ color: props.color }} onClick={onDecrement}>
//         Decrement
//       </button>
//       <br />
//       Counter State: {state.counter}
//     </div>
//   );
// }

export default App;
